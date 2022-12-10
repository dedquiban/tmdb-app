import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/user.slice';
import {
  selectLikedMoviesPlaylist,
  FETCH_LIKED_MOVIES,
  ADD_TO_LIKED_MOVIES,
  REMOVE_FROM_LIKED_MOVIES,
} from '../../../store/movies/movies.slice';
import {
  FETCH_PLAYLISTS,
  EDIT_PLAYLIST,
  selectAllPlaylists,
} from '../../../store/mylist/mylist.slice';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { OptionsContainer, FaHeart, FaPlus } from '../styles/options.styles';
import { AppContext } from '../../../context/AppContext';

const Options = ({ movie }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const playlists = useSelector(selectAllPlaylists);

  const { isOverviewActive, setIsOverviewActive, setIsEmailOverlayActive } =
    useContext(AppContext);

  const handleLikeBtnOnClick = async ({
    clickedMovie,
    currentUser,
    likedMoviesPlaylist,
  }) => {
    if (!currentUser.emailVerified) {
      console.log('currentUser.emailVerified', currentUser.emailVerified);
      setIsEmailOverlayActive(true);
    } else {
      console.log('clicked handleLikeBtn');
      console.log('clickedMovie', clickedMovie);

      if (clickedMovie.isLiked) {
        await dispatch(
          REMOVE_FROM_LIKED_MOVIES({
            currentUser,
            likedMovieToRemove: clickedMovie,
            likedMoviesPlaylist,
          })
        );
        await dispatch(FETCH_LIKED_MOVIES({ currentUser }));

        const newPlaylists = playlists.map((playlist) => {
          const newMovies = playlist.movies.map((movie) => {
            if (clickedMovie.id === movie.id) {
              movie = { ...movie, isLiked: false };
              console.log('if', movie);
            } else {
              movie = { ...movie };
              console.log('else', movie);
            }
            return movie;
          });
          return { ...playlist, movies: newMovies };
        });
        console.log('newPlaylists', newPlaylists);

        const resAll = async (playlists) => {
          await playlists.reduce(async (acc, playlist) => {
            await acc;
            let res = await dispatch(
              EDIT_PLAYLIST({ currentUser, currentPlaylist: playlist })
            );
            console.log('res', res);
          }, Promise.resolve());
          console.log('resAll', resAll);
          dispatch(FETCH_PLAYLISTS({ currentUser }));
        };
        resAll(newPlaylists);
      } else {
        await dispatch(
          ADD_TO_LIKED_MOVIES({
            currentUser,
            movieToAdd: clickedMovie,
            likedMoviesPlaylist,
          })
        );
        await dispatch(FETCH_LIKED_MOVIES({ currentUser }));

        const newPlaylists = playlists.map((playlist) => {
          const newMovies = playlist.movies.map((movie) => {
            if (clickedMovie.id === movie.id) {
              movie = { ...movie, isLiked: true };
              console.log('if', movie);
            } else {
              movie = { ...movie };
              console.log('else', movie);
            }
            return movie;
          });
          return { ...playlist, movies: newMovies };
        });
        console.log('newPlaylists', newPlaylists);

        const resAll = async (playlists) => {
          await playlists.reduce(async (acc, playlist) => {
            await acc;
            let res = await dispatch(
              EDIT_PLAYLIST({ currentUser, currentPlaylist: playlist })
            );
            console.log('res', res);
          }, Promise.resolve());
          console.log('resAll', resAll);
          dispatch(FETCH_PLAYLISTS({ currentUser }));
        };
        resAll(newPlaylists);
      }
    }
  };

  const handleAddToPlaylistIfVerified = () => {
    if (!currentUser.emailVerified) {
      console.log('currentUser.emailVerified', currentUser.emailVerified);
      setIsEmailOverlayActive(true);
    } else {
      setIsOverviewActive(true);
    }
  };

  return (
    <OptionsContainer active={isOverviewActive}>
      <FaHeart
        icon={faHeart}
        isLiked={movie.isLiked}
        onClick={() =>
          handleLikeBtnOnClick({
            clickedMovie: movie,
            currentUser,
            likedMoviesPlaylist,
          })
        }
      />
      <FaPlus icon={faPlus} onClick={() => handleAddToPlaylistIfVerified()} />
    </OptionsContainer>
  );
};

export default Options;
