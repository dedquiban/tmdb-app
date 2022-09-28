import React from 'react';
import requests from '../../requests';
import Sidebar from '../../components/sidebar/sidebar.component';
import Banner from '../../components/banner/banner.component';
import Movies from '../../components/movies/movies.component';
import { HomePageContainer } from './home-page.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Sidebar />
      <Banner />
      <Movies
        header='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Movies header='Trending' fetchUrl={requests.fetchTrending} />
    </HomePageContainer>
  );
};

export default HomePage;
