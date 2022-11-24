import styled, { css } from 'styled-components';

const grid = css`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  p {
    font-size: 14px;
    font-weight: bold;
    padding: 2px 0;
    color: rgb(87, 87, 87);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;

    transition: 0.3s ease all;
    &:hover {
      cursor: pointer;
      color: rgb(160, 160, 160);
    }
  }
`;
const scroll = css`
  display: flex;
  flex-direction: column;

  height: 330px;
  overflow-y: scroll;

  p {
    font-size: 14px;
    font-weight: bold;
    padding: 2px 0;
    color: rgb(87, 87, 87);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;

    transition: 0.3s ease all;
    &:hover {
      cursor: pointer;
      color: rgb(160, 160, 160);
    }
  }
`;

export const PlaylistsContainer = styled.div`
  ${({ value }) => (value === 'scroll' ? scroll : grid)}
`;
