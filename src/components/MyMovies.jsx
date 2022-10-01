import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectedPlaylist } from '../store/mylist/mylist.slice';
import { Tooltip } from '../styles/movies.styles';
import {
  MyMoviesContainer,
  Group,
  Overview,
  Options,
} from '../styles/mymovies.styles';

const MyMovies = () => {
  const currentPlaylist = useSelector(selectedPlaylist);
  const { movies } = currentPlaylist;

  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <MyMoviesContainer>
      {Object.keys(currentPlaylist).length > 0 ? (
        movies.map((movie, index) => (
          <Group key={index}>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip>
              <h3>{movie.title || movie.name}</h3>

              <Overview>
                <p>{movie.overview}</p>
              </Overview>

              <Options>
                <FontAwesomeIcon icon={faHeart} id='add' />
              </Options>
            </Tooltip>
          </Group>
        ))
      ) : (
        <h1>Select a playlist</h1>
      )}
    </MyMoviesContainer>
  );
};

export default MyMovies;
