import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const position = css`
  top: 304px;
`;

export const OptionsContainer = styled.div`
  max-width: 160px;
  position: absolute;
  top: 154px;
  left: 36px;
  font-size: 18px;
  background: #1a1a1a;
  padding: 12px;
  margin-left: 4px;
  z-index: 1;

  transition: 0.6s top ease;
  ${({ active }) => active && position}
`;

const colorRed = css`
  color: #e22525;
`;

export const FaHeart = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: grey;
  ${({ isLiked }) => isLiked && colorRed}
`;

export const FaPlus = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #8c26cb;
  margin-left: 12px;
`;
