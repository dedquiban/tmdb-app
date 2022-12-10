import React from 'react';
import Playlists from './Playlists';
import { MovieOverview, OverviewContainer } from '../styles/overview.styles';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const Overview = ({ movie }) => {
  const { isOverviewActive } = useContext(AppContext);
  return (
    <OverviewContainer active={isOverviewActive}>
      {!isOverviewActive ? (
        <MovieOverview>{movie.overview}</MovieOverview>
      ) : (
        <Playlists movie={movie} />
      )}
    </OverviewContainer>
  );
};

export default Overview;
