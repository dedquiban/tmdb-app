import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../axios';
import { selectLikedMoviesPlaylist } from '../store/movies/movies.slice';
import {
  MoviesContainer,
  MoviesDiv,
  Group,
  MoviesWrapper,
} from '../styles/movies.styles';
import Header from '../features/Movies/components/Header';
import Tooltip from '../features/Movies/components/Tooltip';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl, idx }) => {
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const likedMovies = likedMoviesPlaylist?.movies;

  const [movies, setMovies] = useState([]);

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

  return (
    <MoviesContainer>
      <Header header={header} idx={idx} />
      <MoviesWrapper>
        <MoviesDiv id={`moviesDiv${idx}`} movies={movies}>
          {movies.map((movie, index) => (
            <Group key={index}>
              <img src={`${base_url}${movie.poster_path}`} alt='sample' />
              <Tooltip movie={movie} />
            </Group>
          ))}
        </MoviesDiv>
      </MoviesWrapper>
    </MoviesContainer>
  );
};

export default Movies;
