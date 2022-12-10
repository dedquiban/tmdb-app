import styled, { css } from 'styled-components';

const hide = css`
  visibility: hidden;
`;

export const CurrentPlaylistNameContainer = styled.div`
  ${({ value }) => !value && hide}
  display: flex;
  align-items: center;

  transition: 1s ease all;

  width: 75%;

  @media (max-width: 480px) {
    width: 60%;
  }
  @media (max-width: 582px) {
    width: 100%;
  }
`;

export const Name = styled.h3`
  white-space: nowrap;

  overflow-x: scroll;
  margin-left: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
