import styled, { css } from 'styled-components';

const tooltipGrey = '#1a1a1a';

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

export const MyMoviesContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  width: 100%;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;

  h1 {
    color: rgb(87, 87, 87);
    display: flex;
    position: absolute;
    top: 50%;
    left: 40%;
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  // overflow-x: scroll;
  // overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 0 14px;

  img {
    object-fit: cover;
    width: 240px;
    height: 350px;
    border-radius: 4px;
  }
`;

export const Overview = styled.div`
  ${gradientBorder};
  text-align: left;
  padding: 32px 22px;
  height: 50%;

  p {
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
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

  #add {
    cursor: pointer;
  }
  #added {
    cursor: pointer;
    color: red;
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

  transition: 0.3s all ease;
  &:hover {
    opacity: 0.95;
  }
`;
