import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import mylistReducer from './mylist/mylist.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    mylist: mylistReducer,
  },
});
