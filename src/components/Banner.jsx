import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../utils/requests';
import {
  BannerContainer,
  Description,
  ExpandBtn,
} from '../styles/banner.styles';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const movies = request.data.results;

      console.log(request);
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);

      return request;
    }
    fetchData();
  }, []);

  return (
    <BannerContainer movie={movie}>
      {movie && (
        <>
          {' '}
          <Description expand={expand}>
            <h1>{movie?.name}</h1>
            <p>{movie?.overview}</p>
          </Description>
          <ExpandBtn onClick={() => setExpand(!expand)}>
            {expand ? 'See Less' : 'See More'}{' '}
          </ExpandBtn>
        </>
      )}
    </BannerContainer>
  );
};

export default Banner;
