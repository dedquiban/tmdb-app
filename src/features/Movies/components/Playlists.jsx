import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../../context/AppContext';
import { selectAllPlaylists } from '../../../store/mylist/mylist.slice';
import {
  ADD_MOVIE_TO_PLAYLIST,
  FETCH_PLAYLISTS,
} from '../../../store/mylist/mylist.slice';
import { selectUser } from '../../../store/user/user.slice';
import { PlaylistName, PlaylistsContainer } from '../styles/playlists.styles';

const Playlists = ({ movie }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const playlists = useSelector(selectAllPlaylists);

  const { setIsOverviewActive } = useContext(AppContext);

  const handleAddMovieToPlaylist = async ({
    currentUser,
    movieToAdd,
    selectedPlaylist,
  }) => {
    await dispatch(
      ADD_MOVIE_TO_PLAYLIST({ currentUser, movieToAdd, selectedPlaylist })
    );
    dispatch(FETCH_PLAYLISTS({ currentUser }));
    setIsOverviewActive(false);
  };

  return (
    <PlaylistsContainer>
      {playlists.map((playlist, index) => (
        <PlaylistName
          key={index}
          onClick={() =>
            handleAddMovieToPlaylist({
              currentUser: currentUser,
              movieToAdd: movie,
              selectedPlaylist: playlist,
            })
          }
        >
          {playlist.name}
        </PlaylistName>
      ))}
    </PlaylistsContainer>
  );
};

export default Playlists;
