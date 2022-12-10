import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const noHeight = css`
  transform: translateY(320%);
  opacity: 0;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  padding: 12px 0 12px 2px;
  background: transparent;

  transform: translateY(0);
  opacity: 1;

  p {
    font-weight: bold;
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;

    border-radius: 4px;
    padding: 6px 17px;

    color: linear-gradient(to right bottom, #697f85, #516d75, #516d75, #697f85);
    background: linear-gradient(
      to right bottom,
      #697f85,
      #516d75,
      #516d75,
      #697f85
    );
  }

  transition: transform 0.6s, opacity 0.7s ease;
  ${({ active }) => active && noHeight};
`;

export const VoteInfo = styled.p`
  display: flex;
  top: 48px;
`;

export const FaStar = styled(FontAwesomeIcon)`
  margin-right: 4px;
  color: #e4a300;
`;

export const MovieReleaseInfo = styled.p`
  color: linear-gradient(to right bottom, #697f85, #516d75, #516d75, #697f85);
  font-size: 12px;
  font-family: 'Ubuntu', sans-serif;
  background: linear-gradient(
    to right bottom,
    #697f85,
    #516d75,
    #516d75,
    #697f85
  );

  font-weight: bold;
  border-radius: 4px;
  padding: 6px 17px;
`;

export const QualityInfo = styled(MovieReleaseInfo)``;
