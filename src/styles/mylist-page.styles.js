<<<<<<< HEAD:src/pages/mylist/mylist-page.styles.js
import styled from 'styled-components';
=======
import styled from "styled-components";
>>>>>>> 4968bb098490db158f056239c3d478f5b3383514:src/styles/mylist-page.styles.js

export const MyListContainer = styled.div`
  display: flex;
  background: black;
  height: 100vh;
`;

export const Group = styled.div`
  display: flex;
  background: rgb(22, 22, 22);
  width: 100%;
  height: 45%;
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
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const ToggleDiv = styled.div`
  display: flex;
  justify-content: space-between;

  color: rgb(87, 87, 87);
  font-size: 16px;
  width: 100%;

  p {
  }
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
  height: 80%;
`;