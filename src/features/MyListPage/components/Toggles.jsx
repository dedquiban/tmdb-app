import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getView, SET_VIEW } from '../../../store/user/user.slice';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import {
  Grid,
  Left,
  Right,
  Scroll,
  TogglesContainer,
} from '../styles/toggles.styles';

const Toggles = () => {
  const dispatch = useDispatch();
  const userView = useSelector(getView);

  const scrollLeft = () => {
    let amount = document.getElementById(`moviesDiv`).offsetWidth;
    amount = -Math.abs(amount);

    let moviesDiv = document.getElementById(`moviesDiv`);
    moviesDiv.scrollBy(amount, 0);
  };

  const scrollRight = () => {
    let amount = document.getElementById(`moviesDiv`).offsetWidth;

    let moviesDiv = document.getElementById(`moviesDiv`);
    moviesDiv.scrollBy(amount, 0);
  };

  return (
    <TogglesContainer>
      <Left icon={faChevronLeft} onClick={() => scrollLeft()} />
      <Right icon={faChevronRight} onClick={() => scrollRight()} />
      <Scroll icon={faSquare} onClick={() => dispatch(SET_VIEW('scroll'))} />
      <Grid
        icon={faTableCellsLarge}
        onClick={() => dispatch(SET_VIEW('grid'))}
      />
    </TogglesContainer>
  );
};

export default Toggles;
