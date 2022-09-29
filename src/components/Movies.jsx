import React, { useRef, useState, useEffect } from 'react';
import axios from '../axios';
import { useSelector } from 'react-redux';
import { selectAllPlaylists } from '../store/mylist/mylist.slice';
import {
  MoviesContainer,
  MoviesDiv,
  Group,
  Tooltip,
  Overview,
  Options,
  TooltipList,
  Div,
} from '../styles/movies.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl }) => {
  const playlists = useSelector(selectAllPlaylists);

  const ref = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleAddMovieToPlaylist = (movieToAdd, selectedPlaylist) => {};

  return (
    <MoviesContainer>
      <h2>{header}</h2>

      <MoviesDiv>
        {movies.map((movie, index) => (
          <Group key={index}>
            <img src={`${base_url}${movie.poster_path}`} alt='sample' />
            <Tooltip isActive={isActive}>
              <h3>{movie.title || movie.name}</h3>
              <Overview>
                <p>{movie.overview}</p>
              </Overview>
              <Options>
                <FontAwesomeIcon
                  icon={faHeart}
                  id='add'
                  onClick={() => setIsActive(true)}
                />
              </Options>
            </Tooltip>
            <TooltipList
              isActive={isActive}
              onMouseLeave={() => setIsActive(false)}
            >
              <Div>
                <h3>My Lists</h3>
                <div>
                  {playlists.map((playlist) => (
                    <p onClick={handleAddMovieToPlaylist(movie, playlist)}>
                      {' '}
                      {playlist.name}
                    </p>
                  ))}
                </div>
              </Div>
            </TooltipList>
          </Group>
        ))}
      </MoviesDiv>
    </MoviesContainer>
  );
};

export default Movies;
