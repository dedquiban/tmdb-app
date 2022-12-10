import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const PlaylistName = styled.p`
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
`;
