import React, { useState, useEffect, useContext } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_PLAYLISTS,
  EDIT_PLAYLIST,
  ADD_MOVIE_TO_PLAYLIST,
  selectAllPlaylists,
} from '../store/mylist/mylist.slice';
import {
  ADD_TO_LIKED_MOVIES,
  REMOVE_FROM_LIKED_MOVIES,
  selectLikedMoviesPlaylist,
  FETCH_LIKED_MOVIES,
} from '../store/movies/movies.slice';
import {
  MoviesContainer,
  MoviesDiv,
  Group,
  Tooltip,
  Overview,
  Options,
  Info,
  MoviesWrapper,
  Header,
  Navigate,
  FaHeart,
  FaPlus,
  EmailVerified,
} from '../styles/movies.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import { selectUser } from '../store/user/user.slice';
import { AppContext } from '../context/AppContext';
import EmailVerifiedOverlay from './EmailVerifiedOverlay';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl, idx }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const likedMovies = likedMoviesPlaylist?.movies;

  const playlists = useSelector(selectAllPlaylists);

  const [isActive, setIsActive] = useState(null);
  const { isEmailOverlayActive, setIsEmailOverlayActive } =
    useContext(AppContext);

  const [movies, setMovies] = useState([]);
  const { isLiked } = movies;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const movies = response.data.results;

      const newMovies = movies.map((movie) => {
        let filteredMovie = {};
        likedMovies?.forEach((likedMovie) => {
          let vote_sliced = movie.vote_average.toFixed(1);
          let release_sliced = movie.release_date || movie.first_air_date;
          release_sliced = release_sliced.slice(0, 4);

          if (movie.id === likedMovie.id) {
            filteredMovie = {
              ...movie,
              isLiked: true,
              release_sliced: release_sliced,
              vote_sliced: vote_sliced,
            };
          }
        });

        let vote_sliced = movie.vote_average.toFixed(1);
        let release_sliced = movie.release_date || movie.first_air_date;
        release_sliced = release_sliced.slice(0, 4);
        if (movie.id === filteredMovie.id) {
          return filteredMovie;
        } else {
          return {
            ...movie,
            isLiked: false,
            release_sliced: release_sliced,
            vote_sliced: vote_sliced,
          };
        }
      });
      setMovies(newMovies);
      console.log('Movies', newMovies);
      return movies;
    }
    fetchData();
  }, [fetchUrl, likedMoviesPlaylist]);

  const scrollLeft = () => {
    let amount = document.getElementById(`moviesDiv${idx}`).offsetWidth;
    amount = -Math.abs(amount);

    let moviesDiv = document.getElementById(`moviesDiv${idx}`);
    moviesDiv.scrollBy(amount, 0);
  };

  const scrollRight = () => {
    let amount = document.getElementById(`moviesDiv${idx}`).offsetWidth;

    let moviesDiv = document.getElementById(`moviesDiv${idx}`);
    moviesDiv.scrollBy(amount, 0);
  };

  const handleAddToPlaylistIfVerified = () => {
    if (!currentUser.emailVerified) {
      console.log('currentUser.emailVerified', currentUser.emailVerified);
      setIsEmailOverlayActive(true);
    } else {
      setIsActive(true);
    }
  };

  const handleAddMovieToPlaylist = async ({
    currentUser,
    movieToAdd,
    selectedPlaylist,
  }) => {
    await dispatch(
      ADD_MOVIE_TO_PLAYLIST({ currentUser, movieToAdd, selectedPlaylist })
    );
    dispatch(FETCH_PLAYLISTS({ currentUser }));
    setIsActive(false);
  };

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

  return (
    <MoviesContainer>
      <Header>
        <h2>{header}</h2>
        <Navigate>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => scrollLeft()}
            id='left'
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => scrollRight()}
            id='right'
          />
        </Navigate>
      </Header>

      <MoviesWrapper>
        <MoviesDiv id={`moviesDiv${idx}`}>
          {movies.map((movie, index) => (
            <Group key={index} id='group'>
              <img src={`${base_url}${movie.poster_path}`} alt='sample' />
              <Tooltip
                isActive={isActive}
                onMouseLeave={() => setIsActive(false)}
              >
                <h3>{!isActive ? movie.title || movie.name : 'My List'}</h3>

                <Overview>
                  {!isActive ? (
                    <p id='overview'>{movie.overview}</p>
                  ) : (
                    <div id='playlist-div'>
                      {playlists.map((playlist, index) => (
                        <p
                          key={index}
                          id='playlists'
                          onClick={() =>
                            handleAddMovieToPlaylist({
                              currentUser: currentUser,
                              movieToAdd: movie,
                              selectedPlaylist: playlist,
                            })
                          }
                        >
                          {playlist.name}
                        </p>
                      ))}
                    </div>
                  )}
                </Overview>

                <Options value={isLiked}>
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
                  <FaPlus
                    icon={faPlus}
                    onClick={() => handleAddToPlaylistIfVerified()}
                  />
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
          ))}
        </MoviesDiv>
      </MoviesWrapper>
      {/* <EmailVerifiedOverlay /> */}
    </MoviesContainer>
  );
};

export default Movies;
