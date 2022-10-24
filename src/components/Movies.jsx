import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_PLAYLISTS,
  ADD_MOVIE_TO_PLAYLIST,
  selectAllPlaylists,
} from '../store/mylist/mylist.slice';
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
} from '../styles/movies.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faHeart as added,
} from '@fortawesome/free-solid-svg-icons';
import {
  FETCH_LIKED_MOVIES,
  ADD_TO_LIKED_MOVIES,
  getLikedMovies,
} from '../store/movies/movies.slice';
import { selectUser } from '../store/user/user.slice';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl, idx }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const likedMovies = useSelector(getLikedMovies);

  const playlists = useSelector(selectAllPlaylists);

  const [isActive, setIsActive] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const movies = response.data.results;

      const newMovies = movies.map((movie) => {
        let filteredMovie = {};
        likedMovies.forEach((likedMovie) => {
          let vote_sliced = movie.vote_average;
          vote_sliced = movie.vote_average.toFixed(1);
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
        let vote_sliced = movie.vote_average;
        vote_sliced = movie.vote_average.toFixed(1);
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
      console.log(newMovies);
      return movies;
    }
    fetchData();
  }, [fetchUrl, likedMovies]);

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

  const handleAddMovie = ({ currentUser, movieToAdd, selectedPlaylist }) => {
    dispatch(ADD_TO_LIKED_MOVIES({ currentUser, movieToAdd }));
    dispatch(FETCH_LIKED_MOVIES({ currentUser }));
    dispatch(
      ADD_MOVIE_TO_PLAYLIST({ currentUser, movieToAdd, selectedPlaylist })
    );
    dispatch(FETCH_PLAYLISTS({ currentUser }));
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
                            handleAddMovie({
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

                <Options>
                  {movie.isLiked ? (
                    <FontAwesomeIcon
                      icon={added}
                      id='added'
                      onClick={() => setIsActive(true)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      id='add'
                      onClick={() => setIsActive(true)}
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
          ))}
        </MoviesDiv>
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
