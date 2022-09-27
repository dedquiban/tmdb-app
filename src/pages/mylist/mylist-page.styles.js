import styled, { css } from 'styled-components';

export const MyListContainer = styled.div`
  display: flex;
  background: black;
  height: 100vh;
`;

export const Group = styled.div`
  display: flex;
  background: rgb(22, 22, 22);
  width: 100%;
  height: 55%;
  border-radius: 16px;

  margin: 24px;
  padding 24px;
`;

//PLAYLISTS
export const PlaylistsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

export const IconDiv = styled.div`
  display: flex;
  color: rgb(87, 87, 87);
  font-size: 18px;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: rgb(160, 160, 160);
  }

  p {
    margin-left: 12px;
    margin-bottom: 24px;
    font-weight: bold;
  }

  transition: 0.3s ease all;
`;

//CONTENT--movies of playlist
export const ContentDiv = styled.div`
  display: flex;
  width: 85%;
`;
