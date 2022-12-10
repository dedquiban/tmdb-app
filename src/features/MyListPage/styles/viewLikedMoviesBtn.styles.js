import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ViewLikedMoviesBtnContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid rgba(87, 87, 87, 1);

  p {
    margin-left: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;
    color: rgba(87, 87, 87, 1);

    transition: 0.3s ease all;
    &:hover {
      color: rgba(160, 160, 160, 1);
    }
  }

  &:hover {
    cursor: pointer;

    p {
      transition: 0.3s ease all;
      color: rgb(160, 160, 160);
    }
  }

  @media (max-width: 582px) {
    padding: 12px;
    background: #372626;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    border-bottom: unset;

    p {
      display: none;
    }

    transition: 0.2s all ease;
    &:hover {
      background: #432a2a;
    }
  }

  @media (max-width: 502px) {
    flex-basis: 100%;
    &:hover {
      p {
        color: #a62a2a;
      }
    }

    p {
      display: flex;
      color: #a62a2a;
    }
  }
`;

export const FaHeart = styled(FontAwesomeIcon)`
  color: #a62a2a;
`;
