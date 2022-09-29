import React, { useRef, useState, useEffect } from 'react';
import axios from '../axios';
import {
  MoviesContainer,
  MoviesDiv,
  Group,
  Tooltip,
  Overview,
  Options,
} from '../styles/movies.styles';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl }) => {
  const ref = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <MoviesContainer>
      <h2>{header}</h2>

      <MoviesDiv>
        {movies.map((movie, index) => (
          <Group key={index}>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip>
              <h3>{movie.title || movie.name}</h3>
              <Overview>
                <p>{movie.overview}</p>
              </Overview>
              <Options>
                <i className='fa-regular fa-heart'></i>
              </Options>
            </Tooltip>
          </Group>
        ))}
      </MoviesDiv>
    </MoviesContainer>
  );
};

export default Movies;
