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
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Playlists from '../Playlists';

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
              <i className='fa-regular fa-square' id='scroll'></i>
              <i className='fa-solid fa-table-cells-large' id='grid'></i>
            </Div>
          </ToggleDiv>
          <Movies></Movies>
        </ContentDiv>
      </Group>
    </MyListContainer>
  );
};

export default MyListPage;
