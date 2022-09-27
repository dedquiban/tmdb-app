import React from 'react';
import Sidebar from '../../components/sidebar/sidebar.component';
import {
  MyListContainer,
  Group,
  PlaylistsDiv,
  ContentDiv,
  IconDiv,
} from './mylist-page.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MyListPage = () => {
  return (
    <MyListContainer>
      <Sidebar />
      <Group>
        <PlaylistsDiv>
          <IconDiv>
            <FontAwesomeIcon icon={faPlus} />
            <p>Create Playlist</p>
          </IconDiv>
        </PlaylistsDiv>
        <ContentDiv />
      </Group>
    </MyListContainer>
  );
};

export default MyListPage;
