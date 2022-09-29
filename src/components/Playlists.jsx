import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPlaylists,
  SET_PLAYLISTS,
  selectedPlaylist,
  SET_CURRENT_PLAYLIST,
} from '../store/mylist/mylist.slice';
import { PlaylistsContainer } from '../styles/playlists.styles';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  //const currentPlaylist = useSelector(selectedPlaylist);

  /*
  useEffect(() => {
    //dispatch(SET_PLAYLISTS(playlists));
    console.log('playlists', playlists);
    //eslint-disable-next-line
  }, [playlists]);
  */

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
