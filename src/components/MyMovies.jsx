import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  Group,
  MoviesDiv,
  Overview,
  Tooltip,
  Options,
  Info,
  LikeBtn,
  DeleteBtn,
} from '../styles/mymovies.styles';
import { getView, selectUser } from '../store/user/user.slice';
import { AppContext } from '../context/AppContext';
import {
  ADD_TO_LIKED_MOVIES,
  FETCH_LIKED_MOVIES,
  REMOVE_FROM_LIKED_MOVIES,
  selectLikedMoviesPlaylist,
} from '../store/movies/movies.slice';
import {
  EDIT_PLAYLIST,
  FETCH_PLAYLISTS,
  DELETE_MOVIE_FROM_PLAYLIST,
  selectAllPlaylists,
} from '../store/mylist/mylist.slice';

const base_url = 'https://image.tmdb.org/t/p/original/';

const MyMovies = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  const currentUser = useSelector(selectUser);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const { currentPlaylist } = useContext(AppContext);
  const userView = useSelector(getView);

  useEffect(() => {
    console.log('currentPlaylist', currentPlaylist);
  }, [currentPlaylist]);

  useEffect(() => {
    const newPlaylists = playlists.map((playlist) => {
      const newMovies = playlist.movies.map((movie) => {
        likedMoviesPlaylist?.movies?.forEach((likedMovie) => {
          if (likedMovie.id === movie.id) {
            movie = { ...movie, isLiked: true };
            console.log('if', movie);
          } else {
            movie = { ...movie };
            console.log('else', movie);
          }
        });
        return movie;
      });
      return { ...playlist, movies: newMovies };
    });

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
  }, [likedMoviesPlaylist]);

  const handleLikeBtnOnClick = async (clickedMovie, playlist) => {
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

      const playlist = currentPlaylist.movies.map((movie) => {
        if (clickedMovie.id === movie.id) {
          movie = { ...movie, isLiked: false };
          console.log('if', movie);
        } else {
          movie = { ...movie };
          console.log('else', movie);
        }
        return movie;
      });
      console.log('playlist', playlist);

      await dispatch(EDIT_PLAYLIST({ currentUser, currentPlaylist: playlist }));
      dispatch(FETCH_PLAYLISTS({ currentUser }));
    } else {
      await dispatch(
        ADD_TO_LIKED_MOVIES({
          currentUser,
          movieToAdd: clickedMovie,
          likedMoviesPlaylist,
        })
      );
      await dispatch(FETCH_LIKED_MOVIES({ currentUser }));

      const playlist = currentPlaylist.movies.map((movie) => {
        if (clickedMovie.id === movie.id) {
          movie = { ...movie, isLiked: true };
          console.log('if', movie);
        } else {
          movie = { ...movie };
          console.log('else', movie);
        }
        return movie;
      });
      console.log('playlist', playlist);

      await dispatch(EDIT_PLAYLIST({ currentUser, currentPlaylist: playlist }));
      dispatch(FETCH_PLAYLISTS({ currentUser }));
  };

  const handleDeleteMovieFromPlaylist = async ({
    currentUser,
    movieToDelete,
    selectedPlaylist,
  }) => {
    await dispatch(
      DELETE_MOVIE_FROM_PLAYLIST({
        currentUser,
        movieToDelete,
        selectedPlaylist,
      })
    );
    dispatch(FETCH_PLAYLISTS({ currentUser }));
  };

  return (
    <MoviesDiv id='moviesDiv' value={userView}>
      {Object.keys(currentPlaylist).length > 0 ? (
        currentPlaylist.movies.map((movie, index) => (
          <Group key={index}>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip>
              <h3>{movie.title || movie.name}</h3>
              <Overview>
                <p id='overview'>{movie.overview}</p>
              </Overview>

              <Options>
                <LikeBtn
                  icon={faHeart}
                  isLiked={movie.isLiked}
                  onClick={() => handleLikeBtnOnClick(movie, currentPlaylist)}
                />
                {currentPlaylist?.id !== likedMoviesPlaylist?.id && (
                  <DeleteBtn
                    icon={faTrash}
                    onClick={() =>
                      handleDeleteMovieFromPlaylist({
                        currentUser: currentUser,
                        movieToDelete: movie,
                        selectedPlaylist: currentPlaylist,
                      })
                    }
                  />
                )}
              </Options>
              <Info>
                <p id='vote'>
                  <FontAwesomeIcon icon={faStar} id='star' />
                  {movie.vote_sliced}
                </p>
                <p>{movie.release_sliced}</p>
                <p id='hd'>HD</p>
              </Info>
            </Tooltip>
          </Group>
        ))
      ) : (
        <h1>Select playlist</h1>
      )}
    </MoviesDiv>
  );
};

export default MyMovies;
