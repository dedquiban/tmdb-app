import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      const { uid, email } = action.payload;
      Object.assign(state.currentUser, { uid: uid, email: email });
    },

    SET_LOGOUT_STATE: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { SET_CURRENT_USER, SET_LOGOUT_STATE } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
