import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import mylistReducer from './mylist/mylist.slice';
import moviesReducer from './movies/movies.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    mylist: mylistReducer,
    movies: moviesReducer,
  },
});
