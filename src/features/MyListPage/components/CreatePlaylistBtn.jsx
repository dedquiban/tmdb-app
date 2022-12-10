import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CreatePlaylist, FaPlus } from '../styles/createPlaylistBtn.styles';
import { AppContext } from '../../../context/AppContext';
import { selectUser } from '../../../store/user/user.slice';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CreatePlaylistBtn = () => {
  const currentUser = useSelector(selectUser);

  const { setIsModalActive, setIsEmailOverlayActive } = useContext(AppContext);

  const handleCreatePlaylistIfVerified = () => {
    if (!currentUser.emailVerified) {
      console.log('currentUser.emailVerified', currentUser.emailVerified);
      setIsEmailOverlayActive(true);
    } else {
      setIsModalActive(true);
    }
  };

  return (
    <CreatePlaylist onClick={() => handleCreatePlaylistIfVerified()}>
      <FaPlus icon={faPlus} />
      <p>Create Playlist</p>
    </CreatePlaylist>
  );
};

export default CreatePlaylistBtn;
