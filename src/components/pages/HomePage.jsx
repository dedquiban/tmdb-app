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
      />
      <Movies
        header='Dominic is fucking badass'
        fetchUrl={requests.fetchTrending}
      />
    </HomePageContainer>
  );
};

export default HomePage;
