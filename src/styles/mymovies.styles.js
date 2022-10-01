import styled, { css } from 'styled-components';

const tooltipGrey = '#1a1a1a';

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right, #f7b42c, #fc575e) border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 1px solid transparent;
`;

export const MyMoviesContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  display: flex;
  //justify-content: center;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;

  h1 {
    color: rgb(87, 87, 87);
    //position: absolute;
    padding: 132px 300px;
    display: flex;
  }
`;

export const Group = styled.div`
  position: relative;
  display: flex;
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
