import styled, { css } from 'styled-components';

const grid = css`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  p {
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0;
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

  @media (max-width: 682px) {
    p {
      font-size: 16px;
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
    padding: 4px 0px;
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

  @media (max-width: 682px) {
    p {
      font-size: 16px;
    }
  }
`;

export const PlaylistsContainer = styled.div`
  ${({ value }) => (value === 'scroll' ? scroll : grid)}
`;
