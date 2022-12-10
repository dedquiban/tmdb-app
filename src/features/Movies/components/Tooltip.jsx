import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Header, TooltipContainer } from '../styles/tooltip.styles';
import Overview from '../../Movies/components/Overview';
import Options from '../../Movies/components/Options';
import Info from '../../Movies/components/Info';

const Tooltip = ({ movie }) => {
  const { isOverviewActive, setIsOverviewActive } = useContext(AppContext);

  return (
    <TooltipContainer onMouseLeave={() => setIsOverviewActive(false)}>
      <Header>
        {!isOverviewActive ? movie.title || movie.name : 'My List'}
      </Header>
      <Overview movie={movie} />
      <Options movie={movie} value={movie.isLiked} />
      <Info movie={movie} />
    </TooltipContainer>
  );
};

export default Tooltip;
