import styled, { css } from 'styled-components';

const tooltipGrey = '#1a1a1a';

const visible = css`
  display: flex;
`;

const invisible = css`
  display: none;
`;

const gradientBorder = css`
  background: linear-gradient(#1a1a1a, #1a1a1a) padding-box,
    linear-gradient(to right, #f7b42c, #fc575e) border-box;
  opacity: 0.95;
  border-radius: 8px;
  border: 1px solid transparent;
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 56px 0;

  h2 {
    color: white;
    margin-left: 64px;
    margin-bottom: 6px;
  }
`;

export const MoviesDiv = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 6px;
  padding-bottom: 32px;
  position: relative;
`;

export const Group = styled.div`
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

export const Overview = styled.div``;
export const Options = styled.div``;

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

  &:hover {
    opacity: 0.95;
    ${({ isActive }) => isActive && invisible}

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
      ${gradientBorder};
      text-align: left;
      padding: 32px 22px;
      height: 50%;
    }

    p {
      height: 100%;
      overflow-y: scroll;
      font-size: 14px;
    }

    ${Options} {
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
    }
  }
`;

export const TooltipList = styled.div`
  display: none;
  flex-direction: column;
  opacity: 0;
  background-color: ${tooltipGrey};
  color: #fff;
  border-radius: 4px;
  padding: 24px 20px;

  position: absolute;
  width: 240px;
  height: 350px;

  ${({ isActive }) => isActive && visible}

  &:hover {
    opacity: 0.95;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  ${gradientBorder};
  padding: 32px 22px 24px 22px;
  overflow-y: scroll;

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

  div {
    overflow-x: scroll;
  }

  p {
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    padding: 2px;
  }
`;
