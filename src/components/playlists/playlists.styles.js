import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  h3 {
    font-size: 16px;
    padding: 2px 0;
    color: rgb(87, 87, 87);

    transition: 0.3s ease all;
    &:hover {
      cursor: pointer;
      color: rgb(160, 160, 160);
    }
  }
`;
