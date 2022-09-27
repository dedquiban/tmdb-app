import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload;
    },

    SET_LOGOUT_STATE: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { SET_CURRENT_USER, SET_LOGOUT_STATE } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
