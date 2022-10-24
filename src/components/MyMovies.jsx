import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as added } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectedPlaylist } from '../store/mylist/mylist.slice';
import {
  Group,
  MoviesDiv,
  Overview,
  Tooltip,
  Options,
  Info,
} from '../styles/mymovies.styles';

const base_url = 'https://image.tmdb.org/t/p/original/';

const MyMovies = () => {
  const currentPlaylist = useSelector(selectedPlaylist);
  const { movies } = currentPlaylist;

  return (
    <MoviesDiv id='moviesDiv'>
      {Object.keys(currentPlaylist).length > 0 ? (
        movies.map((movie, index) => (
          <Group key={index} id='group'>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip>
              <h3>{movie.title || movie.name}</h3>
              <Overview>
                <p id='overview'>{movie.overview}</p>
              </Overview>

              <Options>
                <FontAwesomeIcon icon={added} id='added' />
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
        <h1>Select a playlist</h1>
      )}
    </MoviesDiv>
  );
};

export default MyMovies;
