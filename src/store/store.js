import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import mylistReducer from './mylist/mylist.slice';

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    user: userReducer,
    mylist: mylistReducer,
  },
  //middleware: [thunk, immutableStateInvariant, serializableStateInvariant],
});
