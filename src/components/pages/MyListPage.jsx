import React from 'react';
<<<<<<< HEAD:src/pages/mylist/mylist-page.component.jsx
import { useSelector } from 'react-redux';
import { selectedPlaylist } from '../../store/mylist/mylist.slice';
import Sidebar from '../../components/sidebar/sidebar.component';
=======
import Sidebar from '../sidebar/Sidebar';
>>>>>>> 4968bb098490db158f056239c3d478f5b3383514:src/components/pages/MyListPage.jsx
import {
  MyListContainer,
  Group,
  PlaylistsDiv,
  ContentDiv,
  IconDiv,
<<<<<<< HEAD:src/pages/mylist/mylist-page.component.jsx
  ToggleDiv,
  Div,
  Movies,
} from './mylist-page.styles';
=======
} from '../../styles/mylist-page.styles';
>>>>>>> 4968bb098490db158f056239c3d478f5b3383514:src/components/pages/MyListPage.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Playlists from '../../components/playlists/playlists.component';

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
