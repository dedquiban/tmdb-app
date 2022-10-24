import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { serverTimestamp } from 'firebase/firestore';
import {
  addMovieToPlaylist,
  createPlaylistDoc,
  deletePlaylistDoc,
  fetchPlaylists,
  createCurrentPlaylistDoc,
  setCurrentPlaylistDoc,
} from '../../utils/firebase.utils';

const initialState = {
  playlists: [],
  currentPlaylist: {},
};

export const FETCH_PLAYLISTS = createAsyncThunk(
  'mylist/FETCH_PLAYLISTS',
  async ({ currentUser }) => {
    const fetchedPlaylists = await fetchPlaylists(currentUser);

    return fetchedPlaylists;
  }
);

export const mylistSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {
    CREATE_PLAYLIST: (state, action) => {
      const { currentUser, playlistName } = action.payload;

      const playlist = {
        id: '',
        name: playlistName,
        createDate: new Date(),
        movies: [],
      };
      createPlaylistDoc(currentUser, playlist);
    },
    DELETE_PLAYLIST: (state, action) => {
      const { currentUser, currentPlaylist } = action.payload;
      deletePlaylistDoc(currentUser, currentPlaylist);
    },
    ADD_MOVIE_TO_PLAYLIST: (state, action) => {
      const { currentUser, movieToAdd, selectedPlaylist } = action.payload;

      // const playlist = state.playlists.find(
      //   (playlist) => playlist.id === selectedPlaylist.id
      // );
      // const { movies } = playlist;
      const { movies } = selectedPlaylist;
      const existingMovie = movies.find((movie) => movie.id === movieToAdd.id);

      if (existingMovie) {
        alert('This movie is already in playlist');
      } else {
        // movies.push({ ...movieToAdd, isLiked: true });
        const newMovieToAdd = { ...movieToAdd, isLiked: true };
        addMovieToPlaylist(currentUser, newMovieToAdd, selectedPlaylist);
      }
    },

    SET_CURRENT_PLAYLIST: (state, action) => {
      const index = action.payload;

      if (index > -1) {
        state.currentPlaylist = state.playlists[index];
      } else {
        state.currentPlaylist = {};
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_PLAYLISTS.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });
  },
});

export const {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  ADD_MOVIE_TO_PLAYLIST,
  SET_CURRENT_PLAYLIST,
} = mylistSlice.actions;

export const selectAllPlaylists = (state) => state.mylist.playlists;
export const selectedPlaylist = (state) => state.mylist.currentPlaylist;

export default mylistSlice.reducer;
