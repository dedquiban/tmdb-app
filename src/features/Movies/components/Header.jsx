import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContainer,
  Left,
  Right,
  Navigate,
} from '../styles/header.styles';

const Header = ({ header, idx }) => {
  const scrollLeft = () => {
    let amount = document.getElementById(`moviesDiv${idx}`).offsetWidth;
    amount = -Math.abs(amount);

    let moviesDiv = document.getElementById(`moviesDiv${idx}`);
    moviesDiv.scrollBy(amount, 0);
  };

  const scrollRight = () => {
    let amount = document.getElementById(`moviesDiv${idx}`).offsetWidth;

    let moviesDiv = document.getElementById(`moviesDiv${idx}`);
    moviesDiv.scrollBy(amount, 0);
  };

  return (
    <HeaderContainer>
      <h2>{header}</h2>
      <Navigate>
        <Left icon={faChevronLeft} onClick={() => scrollLeft()} />
        <Right icon={faChevronRight} onClick={() => scrollRight()} />
      </Navigate>
    </HeaderContainer>
  );
};

export default Header;
