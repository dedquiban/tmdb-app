import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faEllipsis,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  EDIT_PLAYLIST_NAME,
  DELETE_PLAYLIST,
  FETCH_PLAYLISTS,
} from '../store/mylist/mylist.slice';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { selectUser } from '../store/user/user.slice';
import {
  CurrentPlaylistMenuContainer,
  Choices,
  Rename,
  Delete,
  Overlay,
  Modal,
  Input,
  Button,
  FaXmark,
  Ellipsis,
  Group,
} from '../styles/current-playlist-menu.styles';

const CurrentPlaylistMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const { currentPlaylist, setCurrentPlaylist } = useContext(AppContext);

  const initialValues = {
    playlistName: currentPlaylist.name,
  };

  const ref = useRef(null);
  const [isEditActive, setIsEditActive] = useState(false);

  const [formField, setFormField] = useState(initialValues);
  const { playlistName } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormField = { ...formField, [name]: value };

    setFormField(newFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsEditActive(false);
    const res = await dispatch(
      EDIT_PLAYLIST_NAME({ currentUser, currentPlaylist, playlistName })
    );
    console.log('res', res);
    dispatch(FETCH_PLAYLISTS({ currentUser })).then(
      console.log('dispatched FETCH_PLAYLISTS')
    );
  };

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsEditActive(false);
        setFormField(initialValues);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  const handleEditPlaylistName = async (event) => {
    setIsEditActive(true);
  };

  const handleDeletePlaylist = async (event) => {
    await dispatch(DELETE_PLAYLIST({ currentUser, currentPlaylist }));
    dispatch(FETCH_PLAYLISTS({ currentUser }));
    setCurrentPlaylist({});
  };
  return (
    <CurrentPlaylistMenuContainer>
      <Ellipsis id='ellipsis' icon={faEllipsis} />
      <Group>
        <Choices>
          <Rename
            onClick={() =>
              handleEditPlaylistName({
                currentUser,
                currentPlaylist,
                playlistName,
              })
            }
          >
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Rename</p>
          </Rename>

          <Delete
            onClick={() =>
              handleDeletePlaylist({
                currentUser,
                currentPlaylist,
              })
            }
          >
            <FontAwesomeIcon icon={faTrash} id='faTrash' />
            <p>Delete</p>
          </Delete>
        </Choices>
      </Group>

      <Overlay isActive={isEditActive}>
        <Modal ref={ref} isActive={isEditActive}>
          <form onSubmit={handleSubmit}>
            <h3>Edit playlist name</h3>
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
              onClick={!playlistName ? () => setIsEditActive(false) : undefined}
            >
              <FaXmark icon={faXmark} value={playlistName} />
              <p>{playlistName ? 'Save' : ''}</p>
            </Button>
          </form>
        </Modal>
      </Overlay>
    </CurrentPlaylistMenuContainer>
  );
};

export default CurrentPlaylistMenu;
