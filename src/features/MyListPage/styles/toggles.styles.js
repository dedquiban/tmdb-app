import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const TogglesContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Left = styled(FontAwesomeIcon)`
  font-size: 12px;
  padding: 8px;
  border-radius: 8px;
  background: rgba(26, 26, 26, 0.3);
  margin-right: 2px;

  transition: 0.3s ease all;
  &:hover {
    color: rgb(160, 160, 160);
    cursor: pointer;
  }

  @media (max-width: 582px) {
    display: none;
  }
`;

export const Right = styled(FontAwesomeIcon)`
  font-size: 12px;
  padding: 8px;
  border-radius: 8px;
  background: rgba(26, 26, 26, 0.3);
  margin-right: 24px;

  transition: 0.3s ease all;
  &:hover {
    color: rgb(160, 160, 160);
    cursor: pointer;
  }

  @media (max-width: 582px) {
    display: none;
  }
`;

export const Scroll = styled(FontAwesomeIcon)`
  padding-right: 12px;
  border-right: 1px solid;

  transition: 0.3s ease all;
  &:hover {
    border-right: 1px solid rgb(87, 87, 87);
    color: rgb(160, 160, 160);
  }
`;

export const Grid = styled(FontAwesomeIcon)`
  padding-left: 12px;

  transition: 0.3s ease all;
  &:hover {
    color: rgb(160, 160, 160);
  }
`;
