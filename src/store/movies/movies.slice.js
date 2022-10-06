import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import requests from '../../utils/requests';

const initialState = {
  netflixOriginals: [],
  status: 'idle',
  error: null,
};

export const FETCH_NETFLIX_ORIGINALS = createAsyncThunk(
  'movies/FETCH_NETFLIX_ORIGINALS',
  async () => {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      return response.data.results;
    } catch (err) {
      return err.message;
    }
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    SET_NETFLIX_ORIGINALS_MOVIES: (state, action) => {
      const { request } = action.payload;
      if (state.netflixOriginals.length === 0) {
        state.netflixOriginals = request;

        const newMovies = state.netflixOriginals.map((movie) => ({
          ...movie,
          isLiked: false,
        }));
        state.netflixOriginals = newMovies;
      } else {
        const newMovies = state.netflixOriginals.map((movie) => {
          request.forEach((request) => {
            if (movie.id === request.id) {
              return movie;
            } else {
              return { ...request, isLiked: false };
            }
          });
          return movie;
        });
      }
    },
    SET_MOVIE_LIKED: (state, action) => {
      const { movieToModify } = action.payload;
      const newMovies = state.netflixOriginals.map((movie) => {
        if (movie.id === movieToModify.id) {
          const updatedMovie = { ...movie, isLiked: true };
          return updatedMovie;
        }
        return movie;
      });

      state.netflixOriginals = newMovies;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FETCH_NETFLIX_ORIGINALS.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(FETCH_NETFLIX_ORIGINALS.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const response = action.payload;
        if (state.netflixOriginals.length === 0) {
          state.netflixOriginals = response;

          const newMovies = state.netflixOriginals.map((movie) => ({
            ...movie,
            isLiked: false,
          }));
          state.netflixOriginals = newMovies;
        } else {
          const newMovies = state.netflixOriginals.map((movie) => {
            response.forEach((response) => {
              if (movie.id === response.id) {
                return movie;
              } else {
                return { ...response, isLiked: false };
              }
            });
            return movie;
          });
        }
      })
      .addCase(FETCH_NETFLIX_ORIGINALS.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { SET_NETFLIX_ORIGINALS_MOVIES, SET_MOVIE_LIKED } =
  moviesSlice.actions;

export const selectNetflixOriginals = (state) => state.movies.netflixOriginals;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;

export default moviesSlice.reducer;
