import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../requests';

import { BannerContainer, Description } from './banner.styles';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <BannerContainer movie={movie}>
      <Description>
        <h1>{movie.name}</h1>
        <p>{movie.overview}</p>
      </Description>
    </BannerContainer>
  );
};

export default Banner;
