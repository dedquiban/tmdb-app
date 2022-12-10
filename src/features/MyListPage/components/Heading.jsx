import React from 'react';
import { HeadingContainer } from '../styles/heading.styles';
import CurrentPlaylistName from '../../../components/CurrentPlaylistName';
import Toggles from '../../MyListPage/components/Toggles';

const Heading = () => {
  return (
    <HeadingContainer>
      <CurrentPlaylistName />
      <Toggles />
    </HeadingContainer>
  );
};

export default Heading;
