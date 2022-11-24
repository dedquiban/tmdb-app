import styled from 'styled-components';

export const LeftPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-top: 5px;
  font-size: 14px;
`;

export const CreatePlaylist = styled.div`
  display: flex;
  just
  align-items: center;
  color: rgb(87, 87, 87);
  width: 100%;
  margin-bottom: 8px;

  p {
    margin-left: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;
    color: rgba(87,87,87);
  }

  #faPlus{
    color: #624475;

  }  

  &:hover {
    cursor: pointer;
    
    #faPlus {
      transition: 0.3s ease all;
      p {
        color: rgb(160,160,160);
      }
    }

    p{
      transition: 0.3s ease all;
      color: rgb(160,160,160);
    }
  }
}
`;

export const LikedMovies = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid rgba(87, 87, 87, 1);

  p {
    margin-left: 12px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: clip;
    color: rgba(87, 87, 87, 1);

    transition: 0.3s ease all;
    &:hover {
      color: rgba(160, 160, 160, 1);
    }
  }

  #faHeart {
    color: #a62a2a;
  }

  &:hover {
    cursor: pointer;

    #faHeart {
      transition: 0.3s ease all;
      p {
        color: rgb(160, 160, 160);
      }
    }

    p {
      transition: 0.3s ease all;
      color: rgb(160, 160, 160);
    }
  }
`;
