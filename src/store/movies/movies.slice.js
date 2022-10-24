import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createLikedMovieDoc,
  fetchLikedMovies,
} from '../../utils/firebase.utils';

const initialState = {
  likedMovies: [],
};

export const FETCH_LIKED_MOVIES = createAsyncThunk(
  'mylist/FETCH_LIKED_MOVIES',
  async ({ currentUser }) => {
    const fetchedLikedMovies = await fetchLikedMovies(currentUser);
    return fetchedLikedMovies;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    ADD_TO_LIKED_MOVIES: (state, action) => {
      const { currentUser, movieToAdd } = action.payload;

      const existingMovie = state.likedMovies.find(
        (movie) => movie.id === movieToAdd.id
      );

      if (existingMovie) {
        alert('Movie is already liked');
      } else {
        const likedMovie = {
          ...movieToAdd,
          isLiked: true,
        };
        createLikedMovieDoc(currentUser, likedMovie);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_LIKED_MOVIES.fulfilled, (state, action) => {
      state.likedMovies = action.payload;
    });
  },
});

export const { ADD_TO_LIKED_MOVIES } = moviesSlice.actions;

export const getLikedMovies = (state) => state.movies.likedMovies;

export default moviesSlice.reducer;
