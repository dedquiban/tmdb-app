import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';
import { selectLikedMoviesPlaylist } from '../store/movies/movies.slice';
import CurrentPlaylistMenu from './CurrentPlaylistMenu';

import {
  CurrentPlaylistNameContainer,
  Name,
} from './sidebar/currentPlaylistName.styles';

const CurrentPlaylistName = () => {
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const { currentPlaylist, setCurrentPlaylist } = useContext(AppContext);

  return (
    <CurrentPlaylistNameContainer value={currentPlaylist.name}>
      <Name>{currentPlaylist.name}</Name>
      {currentPlaylist?.id !== likedMoviesPlaylist?.id && (
        <CurrentPlaylistMenu />
      )}
    </CurrentPlaylistNameContainer>
  );
};

export default CurrentPlaylistName;
