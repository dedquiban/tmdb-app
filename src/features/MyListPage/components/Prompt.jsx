import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/user.slice';
import {
  CREATE_PLAYLIST,
  FETCH_PLAYLISTS,
} from '../../../store/mylist/mylist.slice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  Overlay,
  Modal,
  Button,
  FaXmark,
  Input,
} from '../styles/prompt.styles';
import { useRef } from 'react';
import { AppContext } from '../../../context/AppContext';

const initialValues = {
  playlistName: '',
};

const Prompt = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const ref = useRef(null);
  const { isModalActive, setIsModalActive } = useContext(AppContext);
  const [formField, setFormField] = useState(initialValues);
  const { playlistName } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormField = { ...formField, [name]: value };

    setFormField(newFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsModalActive(false);

    const res = await dispatch(CREATE_PLAYLIST({ currentUser, playlistName }));
    console.log('res', res);
    dispatch(FETCH_PLAYLISTS({ currentUser })).then(
      console.log('dispatched FETCH_PLAYLISTS')
    );
  };

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsModalActive(false);
        setFormField(initialValues);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  return (
    <Overlay active={isModalActive}>
      <Modal ref={ref} active={isModalActive}>
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
            onClick={!playlistName ? () => setIsModalActive(false) : undefined}
          >
            <FaXmark icon={faXmark} value={playlistName} />
            <p>{playlistName ? 'Create' : ''}</p>
          </Button>
        </form>
      </Modal>
    </Overlay>
  );
};

export default Prompt;
