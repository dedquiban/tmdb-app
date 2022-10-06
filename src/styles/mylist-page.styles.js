import styled from 'styled-components';

export const MyListContainer = styled.div`
  display: flex;
  background: black;
  height: 100vh;
  padding: 24px;
`;

export const Group = styled.div`
  display: flex;
  background: rgb(22, 22, 22);
  width: 100%;
  height: 444px;
  border-radius: 16px;

  padding: 24px;
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
  font-size: 16px;
  width: 100%;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
    color: rgb(160, 160, 160);
  }

  p {
    margin-left: 12px;
    font-weight: bold;
  }

  transition: 0.3s ease all;
`;

//CONTENT--movies of playlist
export const ContentDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-left: 32px;
`;

export const ToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;

  color: rgb(87, 87, 87);
  font-size: 16px;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }

  #scroll {
    padding-right: 12px;
    border-right: 1px solid;

    transition: 0.3s ease all;
    &:hover {
      border-right: 1px solid rgb(87, 87, 87);
      color: rgb(160, 160, 160);
    }
  }

  #grid {
    padding-left: 12px;

    transition: 0.3s ease all;
    &:hover {
      color: rgb(160, 160, 160);
    }
  }
`;

export const Movies = styled.div`
  display: flex;
  align-items: center;

  padding: 28px 0;
`;
