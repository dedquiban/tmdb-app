import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  selectedPlaylist,
  FETCH_PLAYLISTS,
  SET_CURRENT_PLAYLIST,
  selectAllPlaylists,
} from '../../store/mylist/mylist.slice';
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
  Overlay,
  Modal,
  Input,
  Button,
  Name,
  Choices,
} from '../../styles/mylist-page.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTableCellsLarge,
  faXmark,
  faEllipsis,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import Playlists from '../Playlists';
import MyMovies from '../MyMovies';
import { selectUser } from '../../store/user/user.slice';
import { CHOICES_ICONS } from '../sidebar/sidebar.icons';

const initialValues = {
  playlistName: '',
};

const MyListPage = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  const currentPlaylist = useSelector(selectedPlaylist);
  const currentUser = useSelector(selectUser);
  const { name } = currentPlaylist;

  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [formField, setFormField] = useState(initialValues);
  const { playlistName } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormField = { ...formField, [name]: value };

    setFormField(newFormField);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsActive(false);
    dispatch(CREATE_PLAYLIST({ currentUser, playlistName }));
    dispatch(FETCH_PLAYLISTS({ currentUser }));
  };

  const handleDeletePlaylist = (event) => {
    dispatch(DELETE_PLAYLIST({ currentUser, currentPlaylist }));
    dispatch(FETCH_PLAYLISTS({ currentUser }));
    dispatch(SET_CURRENT_PLAYLIST({}));
  };

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsActive(false);
        setFormField(initialValues);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  useEffect(() => {
    playlists.map((playlist, index) => {
      if (playlist.id === currentPlaylist.id) {
        dispatch(SET_CURRENT_PLAYLIST(index));
      }
    });
  }, [playlists]);

  const scrollLeft = () => {
    let amount = document.getElementById(`moviesDiv`).offsetWidth;
    amount = -Math.abs(amount);

    let moviesDiv = document.getElementById(`moviesDiv`);
    moviesDiv.scrollBy(amount, 0);
  };

  const scrollRight = () => {
    let amount = document.getElementById(`moviesDiv`).offsetWidth;

    let moviesDiv = document.getElementById(`moviesDiv`);
    moviesDiv.scrollBy(amount, 0);
  };

  return (
    <MyListContainer>
      <Sidebar />
      <Group>
        <PlaylistsDiv>
          <IconDiv onClick={() => setIsActive(true)}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Create Playlist</p>
          </IconDiv>
          <Playlists />
        </PlaylistsDiv>
        <ContentDiv>
          <ToggleDiv>
            <Name value={name?.length}>
              <h3>{null ? '' : name}</h3>
              <FontAwesomeIcon icon={faEllipsis} id='choices' />
              <Choices>
                {CHOICES_ICONS.map((choice, index) => (
                  <div
                    key={index}
                    id={choice.id}
                    onClick={
                      choice.id &&
                      (() =>
                        handleDeletePlaylist({ currentUser, currentPlaylist }))
                    }
                  >
                    <FontAwesomeIcon icon={choice.tag} />
                    <p>{choice.name}</p>
                  </div>
                ))}
              </Choices>
            </Name>

            <Div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => scrollLeft()}
                id='left'
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => scrollRight()}
                id='right'
              />

              <FontAwesomeIcon icon={faSquare} id='scroll' />
              <FontAwesomeIcon icon={faTableCellsLarge} id='grid' />
            </Div>
          </ToggleDiv>
          <Movies>
            <MyMovies id='myMovies' />
          </Movies>
        </ContentDiv>
      </Group>

      <Overlay isActive={isActive}>
        <Modal ref={ref} isActive={isActive}>
          <form onSubmit={handleSubmit}>
            <h3>Create playlist</h3>
            <Input
              placeholder='Enter playlist name'
              name='playlistName'
              onChange={handleChange}
              value={playlistName}
              autoComplete='off'
            />

            <Button
              type={playlistName ? 'submit' : 'reset'}
              value={playlistName}
              onClick={!playlistName ? () => setIsActive(false) : undefined}
            >
              <p id='xmark' value={playlistName}>
                x
              </p>
              {/* <FontAwesomeIcon icon={faXmark} id='xmark' value={playlistName} /> */}
              <p>{playlistName ? 'Create' : ''}</p>
            </Button>
          </form>
        </Modal>
      </Overlay>
    </MyListContainer>
  );
};

export default MyListPage;
