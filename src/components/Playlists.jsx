import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';
import { selectLikedMoviesPlaylist } from '../store/movies/movies.slice';
import { selectAllPlaylists } from '../store/mylist/mylist.slice';
import { getView } from '../store/user/user.slice';
import { PlaylistsContainer } from '../styles/playlists.styles';

const Playlists = () => {
  const userView = useSelector(getView);
  const playlists = useSelector(selectAllPlaylists);
  const { setCurrentPlaylist } = useContext(AppContext);

  useEffect(() => {
    console.log(playlists);
  }, []);

  return (
    <PlaylistsContainer value={userView}>
      {playlists.map((playlist, index) => (
        <p key={index} onClick={() => setCurrentPlaylist(playlist)}>
          {playlist.name}
        </p>
      ))}
    </PlaylistsContainer>
  );
};

export default Playlists;
