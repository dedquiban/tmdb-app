import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../../../context/AppContext';
import { selectLikedMoviesPlaylist } from '../../../store/movies/movies.slice';
import {
  FaHeart,
  ViewLikedMoviesBtnContainer,
} from '../styles/viewLikedMoviesBtn.styles';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ViewLikedMoviesBtn = () => {
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const { movies } = likedMoviesPlaylist;
  const { setCurrentPlaylist, showContent, setShowContent } =
    useContext(AppContext);

  const handleSetCurrentPlaylist = () => {};

  const handleShowContent = () => {
    if (movies) {
      setCurrentPlaylist(likedMoviesPlaylist);
      console.log('likedMovies', movies);
    } else {
      setCurrentPlaylist(likedMoviesPlaylist);
      console.log('likedMovies is empty');
    }
    let windowWidth = window.innerWidth;
    if (windowWidth < 503) {
      setShowContent(true);
    }
  };

  return (
    <ViewLikedMoviesBtnContainer onClick={() => handleShowContent()}>
      <FaHeart icon={faHeart} />
      <p>Liked Movies</p>
    </ViewLikedMoviesBtnContainer>
  );
};

export default ViewLikedMoviesBtn;
