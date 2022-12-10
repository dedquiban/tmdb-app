import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  FaStar,
  InfoContainer,
  MovieReleaseInfo,
  QualityInfo,
  VoteInfo,
} from '../styles/info.styles';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const Info = ({ movie }) => {
  const { isOverviewActive } = useContext(AppContext);

  return (
    <InfoContainer active={isOverviewActive}>
      <VoteInfo>
        <FaStar icon={faStar} />
        {movie.vote_sliced}
      </VoteInfo>
      <MovieReleaseInfo>{movie.release_sliced}</MovieReleaseInfo>
      <QualityInfo>HD</QualityInfo>
    </InfoContainer>
  );
};

export default Info;
