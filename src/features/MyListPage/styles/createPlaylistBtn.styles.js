import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  &:hover {
    cursor: pointer;

    p{
      transition: 0.3s ease all;
      color: rgb(160,160,160);
    }
  }


@media (max-width: 582px) {
  padding: 12px;
  background: #2c2331;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  margin-right: 4px;
  p{
    display: none;
  }

  transition: 0.2s all ease;
  &:hover {
    background:#352a3b;

  }
}
  
@media (max-width: 502px) {
  margin-right: 0px;
  flex-basis: 100%;
  &:hover {
    p {
      color:  #624475;
    }
  }

  p {
    display: flex;
    color: #624475;
  }
}

`;

export const FaPlus = styled(FontAwesomeIcon)`
  color: #624475;
`;
