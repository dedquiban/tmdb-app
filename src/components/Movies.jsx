import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import {
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
} from '../styles/movies.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as added } from '@fortawesome/free-solid-svg-icons';
import {
  selectNetflixOriginals,
  SET_MOVIE_LIKED,
  SET_NETFLIX_ORIGINALS_MOVIES,
  getMoviesStatus,
  getMoviesError,
  FETCH_NETFLIX_ORIGINALS,
} from '../store/movies/movies.slice';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl }) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectNetflixOriginals);
  const moviesStatus = useSelector(getMoviesStatus);
  const moviesError = useSelector(getMoviesError);

  const playlists = useSelector(selectAllPlaylists);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (moviesStatus === 'idle') {
      dispatch(FETCH_NETFLIX_ORIGINALS());
    }
  }, [moviesStatus, dispatch]);

  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(fetchUrl);
  //     const request = response.data.results;
  //     dispatch(
  //       SET_NETFLIX_ORIGINALS_MOVIES({ request: request, movies: movies })
  //     );
  //     return movies;
  //     // setMovies(movies);
  //     // console.log(movies);
  //     // return movies;
  //   }
  //   fetchData();
  //   //eslint-disable-next-line
  // }, [fetchUrl]);

  // async function fetchData() {
  //   const response = await axios.get(fetchUrl);
  //   const request = response.data.results;
  //   dispatch(SET_NETFLIX_ORIGINALS_MOVIES({ request: request }));
  //   return movies;
  // }

  // fetchData();

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  // useEffect(() => {
  //   const newMovies = movies.map((movie) => ({
  //     ...movie,
  //     isLiked: false,
  //   }));

  //   setMovies(newMovies);
  //   console.log(newMovies);
  // }, []);

  const handleAddMovieToPlaylist = ({ movieToAdd, selectedPlaylist }) => {
    // const newMovies = movies.map((movie) => {
    //   if (movie.id === movieToAdd.id) {
    //     const updatedMovie = { ...movie, isLiked: true };
    //     return updatedMovie;
    //   }

    //   return movie;
    // });

    // setMovies(newMovies);
    // console.log(newMovies);
    dispatch(ADD_MOVIE_TO_PLAYLIST({ movieToAdd, selectedPlaylist }));
    dispatch(SET_MOVIE_LIKED({ movieToModify: movieToAdd }));
    console.log('updatedMovies', movies);
  };

  return (
    <MoviesContainer>
      <h2>{header}</h2>

      <MoviesDiv>
        {movies.map((movie, index) => (
          <Group key={index}>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip
              isActive={isActive}
              onMouseLeave={() => setIsActive(false)}
            >
              <h3>{!isActive ? movie.title || movie.name : 'My List'}</h3>

              <Overview isActive={isActive}>
                {!isActive ? (
                  <p id='overview'>{movie.overview}</p>
                ) : (
                  <div id='playlist-div'>
                    {playlists.map((playlist) => (
                      <p
                        id='playlists'
                        onClick={() =>
                          handleAddMovieToPlaylist({
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

              <Options isActive={isActive}>
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
            </Tooltip>
          </Group>
        ))}
      </MoviesDiv>
    </MoviesContainer>
  );
};

export default Movies;
