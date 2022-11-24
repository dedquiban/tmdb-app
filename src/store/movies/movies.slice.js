import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addToLikedMovies,
  removeFromLikedMovies,
  fetchLikedMovies,
} from '../../utils/firebase.utils';

const initialState = {
  likedMoviesPlaylist: {},
};

export const FETCH_LIKED_MOVIES = createAsyncThunk(
  'movies/FETCH_LIKED_MOVIES',
  async ({ currentUser }) => {
    const fetchedLikedMovies = await fetchLikedMovies(currentUser);
    return fetchedLikedMovies;
  }
);

export const ADD_TO_LIKED_MOVIES = createAsyncThunk(
  'movies/ADD_TO_LIKED_MOVIES',
  async ({ currentUser, movieToAdd, likedMoviesPlaylist }) => {
    const existingMovie = likedMoviesPlaylist.movies?.find(
      (movie) => movie.id === movieToAdd.id
    );
    console.log(existingMovie);

    if (existingMovie) {
      toast('Movie is already liked');
    } else {
      const likedMovie = {
        ...movieToAdd,
        isLiked: true,
      };
      // const likedMovie = { id: movieToAdd.id };
      toast('Added to Liked Movies');
      await addToLikedMovies(currentUser, likedMovie, likedMoviesPlaylist);
    }
  }
);

export const REMOVE_FROM_LIKED_MOVIES = createAsyncThunk(
  'movies/REMOVE_FROM_LIKED_MOVIES',
  async ({ currentUser, likedMovieToRemove, likedMoviesPlaylist }) => {
    await removeFromLikedMovies(
      currentUser,
      likedMovieToRemove,
      likedMoviesPlaylist
    );
    toast('Removed from Liked Movies');
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    CREATE_LIKED_MOVIES_PLAYLIST: (state, action) => {
      const { newLikedMoviesPlaylist } = action.payload;
      state.likedMoviesPlaylist = newLikedMoviesPlaylist;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_LIKED_MOVIES.fulfilled, (state, action) => {
      state.likedMoviesPlaylist = action.payload;
    });
    builder.addCase(ADD_TO_LIKED_MOVIES.fulfilled, (state, action) => {
      // state.likedMoviesPlaylist = action.payload;
    });
    builder.addCase(REMOVE_FROM_LIKED_MOVIES.fulfilled, (state, action) => {
      // state.likedMoviesPlaylist = action.payload;
    });
  },
});

export const { CREATE_LIKED_MOVIES_PLAYLIST } = moviesSlice.actions;

export const selectLikedMoviesPlaylist = (state) =>
  state.movies.likedMoviesPlaylist;

export default moviesSlice.reducer;
