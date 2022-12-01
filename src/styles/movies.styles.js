import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const tooltipGrey = '#1a1a1a';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right bottom, #697f85, #516d75, #516d75, #697f85)
      border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 2px solid transparent;
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 56px 0;
`;

export const MoviesWrapper = styled.div`
  background: rgba(87, 87, 87, 0.3);

  padding: 24px;
  margin: 12px 36px;
  border-radius: 8px;
`;

export const MoviesDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 36px;
  color: #fff;

  h2 {
    margin-left: 32px;
  }

  #left {
    margin-right: 8px;
    padding: 12px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background: #1a1a1a;
    }
  }

  #right {
    padding: 12px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;

      background: #1a1a1a;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;
`;

export const Group = styled.div`
  &:last-child {
    padding-right: 0;
  }

  display: flex;
  scroll-behavior: smooth;
  padding-right: 28px;

  img {
    object-fit: cover;
    width: 240px;
    height: 350px;
    border-radius: 4px;
  }
`;

const fullHeight = css`
  height: 100%;
`;

const noHeight = css`
  transform: translateY(320%);
  opacity: 0;
`;
const position = css`
  top: 304px;
`;

export const Overview = styled.div`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 50%;
  position: relative;

  #overview {
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  #playlist-div {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  #playlists {
    font-weight: bold;
    font-size: 14px;
    padding: 2px 0;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;

    transition: 0.3s all ease;
    &:hover {
      cursor: pointer;
      color: rgb(160, 160, 160);
    }
  }
`;

export const Options = styled.div`
  max-width: 160px;
  position: absolute;
  top: 154px;
  left: 36px;
  font-size: 18px;
  background: #1a1a1a;
  padding: 12px;
  margin-left: 4px;
  z-index: 1;
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
export const Info = styled.div`
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
  }

  #star {
    margin-right: 4px;
    color: #e4a300;
  }
  #vote {
    display: flex;
    top: 48px;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  background-color: ${tooltipGrey};
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  width: 240px;
  height: 350px;

  h3 {
    max-width: 160px;
    position: absolute;
    top: 4px;
    left: 36px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #1a1a1a;
    padding: 12px;
    z-index: 1;
  }

  ${Overview} {
    transition: 0.6s height ease;
    ${({ isActive }) => isActive && fullHeight}
  }

  ${Options} {
    transition: 0.6s top ease;
    ${({ isActive }) => isActive && position}
  }

  ${Info} {
    transition: transform 0.6s, opacity 0.7s ease;
    ${({ isActive }) => isActive && noHeight};
  }

  transition: 0.3s all ease;
  &:hover {
    opacity: 0.95;
  }
`;

const visible = css`
  display: flex;
`;
