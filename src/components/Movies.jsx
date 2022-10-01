import React, { useRef, useState, useEffect } from 'react';
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

const base_url = 'https://image.tmdb.org/t/p/original/';

const Movies = ({ header, fetchUrl }) => {
  const dispatch = useDispatch();
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

  const handleAddMovieToPlaylist = ({ movieToAdd, selectedPlaylist }) => {
    dispatch(ADD_MOVIE_TO_PLAYLIST({ movieToAdd, selectedPlaylist }));
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
                <FontAwesomeIcon
                  icon={faHeart}
                  id='add'
                  onClick={() => setIsActive(true)}
                />
              </Options>
            </Tooltip>
          </Group>
        ))}
      </MoviesDiv>
    </MoviesContainer>
  );
};

export default Movies;
