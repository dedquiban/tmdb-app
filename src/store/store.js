import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';
import userReducer from './user/user.slice';
import mylistReducer from './mylist/mylist.slice';
import moviesReducer from './movies/movies.slice';

// const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    mylist: mylistReducer,
    movies: moviesReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// saga.run();
