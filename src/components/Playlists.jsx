import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPlaylists,
  SET_CURRENT_PLAYLIST,
} from '../store/mylist/mylist.slice';
import { PlaylistsContainer } from '../styles/playlists.styles';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);

  return (
    <PlaylistsContainer>
      {playlists.map((playlist, index) => (
        <h3
          key={index}
          onClick={() => dispatch(SET_CURRENT_PLAYLIST(playlist))}
        >
          {playlist.name}
        </h3>
      ))}
    </PlaylistsContainer>
  );
};

export default Playlists;
