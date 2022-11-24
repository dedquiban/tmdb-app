import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  view: 'scroll',
  status: 'idle',
  error: '',
};

export const SET_CURRENT_USER = createAsyncThunk(
  'user/SET_CURRENT_USER',
  async ({ uid, email, emailVerified }) => {
    let currentUser;
    currentUser = {
      ...currentUser,
      uid: uid,
      email: email,
      emailVerified: emailVerified,
    };
    return currentUser;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_LOGOUT_STATE: (state, action) => {
      state.currentUser = action.payload;
      state.status = 'logged out';
    },
    SET_VIEW: (state, action) => {
      state.view = action.payload;
    },
    SET_USER_STATUS: (state, action) => {
      state.status = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SET_CURRENT_USER.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(SET_CURRENT_USER.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const { uid, email, emailVerified } = action.payload;
      Object.assign(state.currentUser, {
        uid: uid,
        email: email,
        emailVerified: emailVerified,
      });
    });
    builder.addCase(SET_CURRENT_USER.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { SET_LOGOUT_STATE, SET_VIEW, SET_USER_STATUS } =
  userSlice.actions;

export const selectUser = (state) => state.user.currentUser;
export const getView = (state) => state.user.view;
export const selectUserLoadingStatus = (state) => state.user.status;

export default userSlice.reducer;
