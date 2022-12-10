import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const invisible = css`
  display: none;
`;
const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(
        to right bottom,
        #c441c4,
        #de379f,
        #e73f7d,
        #e45160,
        #d9654c,
        #d36c46,
        #cc7342,
        #c5793f,
        #c7763f,
        #c8743f,
        #ca713f,
        #cb6e3f
      )
      border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 2px solid transparent;
`;

//MoviesDiv
const scrollView = css`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  flex: 1;
  transition: 0.4s flex linear;

  h1 {
    color: rgb(87, 87, 87);
  }
`;

const gridView = css`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(320px, 1fr));

  overflow-x: hidden;

  @keyframes scaleY {
    0% {
      transform: scale(0.6, 0.6);
    }

    100% {
      transform: scale(1, 1);
    }
  }
  animation: 0.6s scaleY ease;

  h1 {
    color: rgb(87, 87, 87);
  }

  @media (max-width: 982px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(290px, 1fr));
  }

  @media (max-width: 682px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(220px, 1fr));
  }
  @media (max-width: 582px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

//Group
const scrollType = css`
  position: relative;
  padding: 0 14px;
  padding-bottom: 24px;

  img {
    object-fit: cover;
    width: 240px;
    height: 350px;
    border-radius: 4px;
  }
`;

const gridType = css`
  display: flex;
  position: relative;
  padding: 8px 10px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  @media (max-width: 502px) {
    padding: 4px;
  }
`;

export const Group = styled.div``;

//Overview
const gridOverview = css`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 60%;
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

const fullHeight = css`
  height: 100%;
`;
const scrollOverview = css`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 50%;

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

  @media (max-width: 480px) {
    height: 80%;
  }
`;

export const Overview = styled.div``;

//LikeBtn
const red = css`
  color: #e22525;
`;

export const LikeBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: grey;

  ${({ isLiked }) => isLiked && red}
`;

const gridSizeDeleteBtn = css`
  font-size: 14px;
`;

const scrollSizeDeleteBtn = css`
  font-size: 16px;
`;
export const DeleteBtn = styled(LikeBtn)`
  margin-left: 12px;

  transition: 0.3s all ease;
  &:hover {
    color: red;
  }
`;

//Options
const gridOptions = css`
  max-width: fit-content;
  display: flex;
  align-items: center;
  position: absolute;
  // top: 166px;
  // left: 36px;
  top: calc(100% / 1.9);
  left: 36px;
  font-size: 16px;
  background: #1a1a1a;
  padding: 12px;
  z-index: 1;
`;

const scrollOptions = css`
  max-width: fit-content;
  display: flex;
  align-items: center;
  position: absolute;
  top: 154px;
  left: 36px;
  font-size: 18px;
  background: #1a1a1a;
  padding: 12px;
  z-index: 1;

  @media (max-width: 480px) {
    top: 214px;
  }
`;
export const Options = styled.div``;

//Info
const gridInfo = css`
  position: absolute;
  top: 214px;
  left: 0;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  // padding: 12px 0 12px 2px;
  background: transparent;

  transform: translateY(0);
  opacity: 1;

  p {
    margin-right: 4px;
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;
    background: linear-gradient(
      to left top,
      #2c272c,
      #31262c,
      #352629,
      #392525,
      #3b2620,
      #3d2820,
      #3f2b1f,
      #402d1f,
      #453123,
      #493428,
      #4e382c,
      #523c31
    );

    font-weight: bold;
    border-radius: 4px;
    padding: 6px 18px;
  }

  #star {
    margin-right: 4px;
    color: #e4a300;
  }
  #vote {
    display: flex;
  }
`;

const scrollInfo = css`
  position: absolute;
  top: 190px;
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
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;
    background: linear-gradient(
      to left top,
      #2c272c,
      #31262c,
      #352629,
      #392525,
      #3b2620,
      #3d2820,
      #3f2b1f,
      #402d1f,
      #453123,
      #493428,
      #4e382c,
      #523c31
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

  @media (max-width: 480px) {
    top: 248px;
    left: 20px;
    width: 79%;

    p {
      padding: 6px 12px;
    }
  }
`;

export const Info = styled.div``;

//Tooltip
const gridTooltip = css`
  display: none;
  flex-direction: column;
  opacity: 0;
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  // top: 8px;
  // left: 10px;
  // width: 210px;
  // height: 320px;
  width: 100%;
  height: 100%;

  h3 {
    max-width: 136px;
    position: absolute;
    top: 6px;
    left: 36px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #1a1a1a;
    padding: 12px;
    z-index: 1;
  }

  @media (max-width: 682px) {
    // display: none;
  }
`;

const scrollTooltip = css`
  display: flex;
  flex-direction: column;
  opacity: 0;
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  top: 0px;
  left: 14px;
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

  @media (max-width: 480px) {
    width: 200px;
    height: 310px;

    h3 {
      top: 6px;
      font-size: 16px;
      max-width: 128px;
    }
  }
`;

export const Tooltip = styled.div``;

export const MoviesDiv = styled.div`
  ${({ value }) => (value === 'scroll' ? scrollView : gridView)};

  ${Group} {
    ${({ value }) => (value === 'grid' ? gridType : scrollType)}
  }

  ${Overview} {
    ${({ value }) => (value === 'grid' ? gridOverview : scrollOverview)}
  }

  ${Options} {
    ${({ value }) => (value === 'grid' ? gridOptions : scrollOptions)}
    ${DeleteBtn} {
      ${({ value }) =>
        value === 'grid' ? gridSizeDeleteBtn : scrollSizeDeleteBtn}
    }
  }

  ${Info} {
    ${({ value }) => (value === 'grid' ? gridInfo : scrollInfo)}
  }

  ${Tooltip} {
    ${({ value }) => (value === 'grid' ? gridTooltip : scrollTooltip)}

    transition: 0.3s all ease;
    &:hover {
      opacity: 0.95;
    }

    ${Overview} {
      transition: 0.6s height ease;
    }
  }
`;
