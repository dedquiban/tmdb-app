import React from 'react';
import requests from '../utils/requests';
import Sidebar from '../components/sidebar/Sidebar';
import Banner from '../components/Banner';
import Movies from '../components/Movies';
import { HomePageContainer } from '../styles/home-page.styles';

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
