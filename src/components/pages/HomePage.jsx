import React from 'react';
import requests from '../../utils/requests';
import Sidebar from '../sidebar/Sidebar';
import Banner from '../Banner';
import Movies from '../Movies';
import { HomePageContainer } from '../../styles/home-page.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Sidebar />
      <Banner />
      <Movies
        header='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        idx={0}
      />
      <Movies header='Trending' fetchUrl={requests.fetchTrending} idx={1} />
    </HomePageContainer>
  );
};

export default HomePage;
