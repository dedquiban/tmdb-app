import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {
  BackCard,
  Bottom,
  FaHeart,
  FaStar,
  FrontCard,
  Group,
  MoviePreviewContainer,
  Overlay,
  Overview,
  QualityInfo,
  ReleaseInfo,
  VoteInfo,
} from '../styles/moviePreview.styles';

const base_url = 'https://image.tmdb.org/t/p/original/';

const MoviePreview = ({ movie }) => {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <MoviePreviewContainer
        onClick={() => setPreview(!preview)}
        preview={preview}
      >
        <FrontCard>
          <img src={`${base_url}${movie.poster_path}`} alt='sample' />
        </FrontCard>

        <BackCard>
          <img src={`${base_url}${movie.poster_path}`} alt='sample' />
          <h3>{movie.title || movie.name}</h3>
          <Group>
            <ReleaseInfo>
              {movie.first_air_date || movie.release_date}
            </ReleaseInfo>
            <VoteInfo>
              <FaStar icon={faStar} />
              <p>{movie.vote_sliced}</p>
            </VoteInfo>
            <QualityInfo>HD</QualityInfo>
          </Group>
          <Overview>{movie.overview}</Overview>
          <Bottom>
            <FaHeart icon={faHeart} value={movie.isLiked} />
          </Bottom>
        </BackCard>
      </MoviePreviewContainer>
      <Overlay preview={preview} />
    </>
  );
};

export default MoviePreview;
