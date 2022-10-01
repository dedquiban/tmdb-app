import React from 'react';
import { useSelector } from 'react-redux';
import { selectedPlaylist } from '../../store/mylist/mylist.slice';
import Sidebar from '../sidebar/Sidebar';
import {
  MyListContainer,
  Group,
  PlaylistsDiv,
  ContentDiv,
  IconDiv,
  ToggleDiv,
  Div,
  Movies,
} from '../../styles/mylist-page.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import Playlists from '../Playlists';
import MyMovies from '../MyMovies';

const MyListPage = () => {
  const currentPlaylist = useSelector(selectedPlaylist);
  const { name } = currentPlaylist;
  return (
    <MyListContainer>
      <Sidebar />
      <Group>
        <PlaylistsDiv>
          <IconDiv>
            <FontAwesomeIcon icon={faPlus} />
            <p>Create Playlist</p>
          </IconDiv>
          <Playlists />
        </PlaylistsDiv>
        <ContentDiv>
          <ToggleDiv>
            <p>{null ? '' : name}</p>
            <Div>
              <FontAwesomeIcon icon={faSquare} id='scroll' />
              <FontAwesomeIcon icon={faTableCellsLarge} id='grid' />
            </Div>
          </ToggleDiv>
          <Movies>
            <MyMovies />
          </Movies>
        </ContentDiv>
      </Group>
    </MyListContainer>
  );
};

export default MyListPage;
