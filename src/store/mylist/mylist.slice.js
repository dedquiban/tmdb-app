import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addMovieToPlaylist,
  deleteMovieFromPlaylist,
  createPlaylistDoc,
  editPlaylistDoc,
  deletePlaylistDoc,
  fetchPlaylists,
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

export const CREATE_PLAYLIST = createAsyncThunk(
  'mylist/CREATE_PLAYLIST',
  async ({ currentUser, playlistName }) => {
    const playlist = {
      id: '',
      name: playlistName,
      createDate: new Date(),
      movies: [],
    };
    await createPlaylistDoc(currentUser, playlist);
  }
);

export const EDIT_PLAYLIST_NAME = createAsyncThunk(
  'mylist/EDIT_PLAYLIST_NAME',
  async ({ currentUser, currentPlaylist, playlistName }) => {
    const { createDate } = currentPlaylist;
    const playlist = {
      ...currentPlaylist,
      name: playlistName,
      createDate: new Date(createDate),
    };
    await editPlaylistDoc(currentUser, playlist);
  }
);

export const EDIT_PLAYLIST = createAsyncThunk(
  'mylist/EDIT_PLAYLIST',
  async ({ currentUser, currentPlaylist }) => {
    const { createDate } = currentPlaylist;
    const playlist = {
      ...currentPlaylist,
      createDate: new Date(createDate),
    };
    console.log('playlist', playlist);
    await editPlaylistDoc(currentUser, playlist);
  }
);

export const DELETE_PLAYLIST = createAsyncThunk(
  'mylist/DELETE_PLAYLIST',
  async ({ currentUser, currentPlaylist }) => {
    await deletePlaylistDoc(currentUser, currentPlaylist);
    toast('Deleted playlist');
  }
);

export const ADD_MOVIE_TO_PLAYLIST = createAsyncThunk(
  'mylist/ADD_MOVIE_TO_PLAYLIST',
  async ({ currentUser, movieToAdd, selectedPlaylist }) => {
    const { movies } = selectedPlaylist;
    const existingMovie = movies.find((movie) => movie.id === movieToAdd.id);

    if (existingMovie) {
      toast('This movie is already in playlist');
    } else {
      const newMovieToAdd = { ...movieToAdd };
      await addMovieToPlaylist(currentUser, newMovieToAdd, selectedPlaylist);
      toast('Added to playlist');
    }
  }
);

export const DELETE_MOVIE_FROM_PLAYLIST = createAsyncThunk(
  'mylist/DELETE_MOVIE_FROM_PLAYLIST',
  async ({ currentUser, movieToDelete, selectedPlaylist }) => {
    await deleteMovieFromPlaylist(currentUser, movieToDelete, selectedPlaylist);
    toast('Removed from playlist');
  }
);

export const mylistSlice = createSlice({
  name: 'mylist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FETCH_PLAYLISTS.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });
    builder.addCase(CREATE_PLAYLIST.fulfilled, (state, action) => {});
    builder.addCase(EDIT_PLAYLIST_NAME.fulfilled, (state, action) => {});
    builder.addCase(EDIT_PLAYLIST.fulfilled, (state, action) => {});
    builder.addCase(DELETE_PLAYLIST.fulfilled, (state, action) => {});
    builder.addCase(ADD_MOVIE_TO_PLAYLIST.fulfilled, (state, action) => {});
    builder.addCase(
      DELETE_MOVIE_FROM_PLAYLIST.fulfilled,
      (state, action) => {}
    );
  },
});

export const { SET_CURRENT_PLAYLIST } = mylistSlice.actions;

export const selectAllPlaylists = (state) => state.mylist.playlists;
export const selectedPlaylist = (state) => state.mylist.currentPlaylist;

export default mylistSlice.reducer;
