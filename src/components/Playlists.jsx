import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_PLAYLISTS,
  selectAllPlaylists,
  SET_CURRENT_PLAYLIST,
} from '../store/mylist/mylist.slice';
import { selectUser } from '../store/user/user.slice';
import { PlaylistsContainer } from '../styles/playlists.styles';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);

  useEffect(() => {
    console.log(playlists);
  }, []);

  return (
    <PlaylistsContainer>
      {playlists.map((playlist, index) => (
        <h3 key={index} onClick={() => dispatch(SET_CURRENT_PLAYLIST(index))}>
          {playlist.name}
        </h3>
      ))}
    </PlaylistsContainer>
  );
};

export default Playlists;
