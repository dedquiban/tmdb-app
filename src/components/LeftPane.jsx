import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  LeftPaneContainer,
  LikedMovies,
  CreatePlaylist,
} from '../styles/left-pane.styles';
import { AppContext } from '../context/AppContext';
import Playlists from './Playlists';
import { selectLikedMoviesPlaylist } from '../store/movies/movies.slice';
import { selectUser } from '../store/user/user.slice';

const LeftPane = () => {
  const currentUser = useSelector(selectUser);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const { movies } = likedMoviesPlaylist;
  const {
    setIsModalActive,
    setCurrentPlaylist,
    isEmailOverlayActive,
    setIsEmailOverlayActive,
  } = useContext(AppContext);

  const handleSetCurrentPlaylist = () => {
    if (movies) {
      setCurrentPlaylist(likedMoviesPlaylist);
      console.log('likedMovies', movies);
    } else {
      setCurrentPlaylist(likedMoviesPlaylist);
      console.log('likedMovies is empty');
    }
  };

  const handleCreatePlaylistIfVerified = () => {
    if (!currentUser.emailVerified) {
      console.log('currentUser.emailVerified', currentUser.emailVerified);
      setIsEmailOverlayActive(true);
    } else {
      setIsModalActive(true);
    }
  };

  return (
    <LeftPaneContainer>
      <CreatePlaylist onClick={() => handleCreatePlaylistIfVerified()}>
        <FontAwesomeIcon icon={faPlus} id='faPlus' />
        <p>Create Playlist</p>
      </CreatePlaylist>
      <LikedMovies onClick={() => handleSetCurrentPlaylist()}>
        <FontAwesomeIcon icon={faHeart} id='faHeart' />
        <p>Liked Movies</p>
      </LikedMovies>
      <Playlists />
    </LeftPaneContainer>
  );
};

export default LeftPane;
