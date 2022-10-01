import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [
    {
      id: 1,
      createDate: '07/20/2022',
      name: 'super long playlist name example vol 2',
      movies: [],
    },
    {
      id: 2,
      createDate: '08/20/2022',
      name: 'aug 2022',
      movies: [],
    },
    {
      id: 3,
      createDate: '08/20/2022',
      name: 'sept 2022',
      movies: [],
    },
    {
      id: 4,
      createDate: '08/20/2022',
      name: 'oct 2022',
      movies: [],
    },
    {
      id: 5,
      createDate: '08/20/2022',
      name: 'nov 2022',
      movies: [],
    },
    {
      id: 6,
      createDate: '08/20/2022',
      name: 'dec 2022',
      movies: [],
    },
    {
      id: 7,
      createDate: '08/20/2022',
      name: 'jan 2023',
      movies: [],
    },
    {
      id: 8,
      createDate: '08/20/2022',
      name: 'feb 2023',
      movies: [],
    },
    {
      id: 9,
      createDate: '08/20/2022',
      name: 'mar 2023',
      movies: [],
    },
    {
      id: 10,
      createDate: '08/20/2022',
      name: 'apr 2023',
      movies: [],
    },
    {
      id: 11,
      createDate: '08/20/2022',
      name: 'may 2023',
      movies: [],
    },
    {
      id: 12,
      createDate: '08/20/2022',
      name: 'jun 2023',
      movies: [],
    },
    {
      id: 13,
      createDate: '08/20/2022',
      name: 'jul 2023',
      movies: [],
    },
    {
      id: 14,
      createDate: '08/20/2022',
      name: 'aug 2023',
      movies: [],
    },
    {
      id: 14,
      createDate: '08/20/2022',
      name: 'sep 2023',
      movies: [],
    },
    {
      id: 15,
      createDate: '08/20/2022',
      name: 'oct 2023',
      movies: [],
    },
  ],

  currentPlaylist: {},
};

export const mylistSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {
    SET_PLAYLISTS: (state, action) => {
      state.playlists = action.payload;
    },
    ADD_MOVIE_TO_PLAYLIST: (state, action) => {
      const { movieToAdd, selectedPlaylist } = action.payload;

      const playlist = state.playlists.find(
        (playlist) => playlist.id === selectedPlaylist.id
      );
      const { movies } = playlist;
      const existingMovie = movies.find((movie) => movie.id === movieToAdd.id);

      if (existingMovie) {
        alert('This movie is already in playlist');
      } else {
        movies.push(movieToAdd);
      }
    },

    SET_CURRENT_PLAYLIST: (state, action) => {
      state.currentPlaylist = action.payload;
    },
  },
});

export const { SET_PLAYLISTS, ADD_MOVIE_TO_PLAYLIST, SET_CURRENT_PLAYLIST } =
  mylistSlice.actions;

export const selectAllPlaylists = (state) => state.mylist.playlists;
export const selectedPlaylist = (state) => state.mylist.currentPlaylist;

export default mylistSlice.reducer;
