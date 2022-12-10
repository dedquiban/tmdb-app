import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  SidebarContainer,
  IconDiv,
  ContentDiv,
  ProfileDiv,
  Tooltip,
  Overlay,
  Profile,
  SignOut,
  MobileIcons,
  MobileProfileIcon,
  Icon,
  MobileTooltip,
  MobileProfileDiv,
} from '../../styles/sidebar.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import { SIDEBAR_ICONS } from './sidebar.icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {
  selectUser,
  selectUserLoadingStatus,
  SET_LOGOUT_STATE,
} from '../../store/user/user.slice';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { selectAllPlaylists } from '../../store/mylist/mylist.slice';
import { selectLikedMoviesPlaylist } from '../../store/movies/movies.slice';

const Sidebar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);
  const userLoadingStatus = useSelector(selectUserLoadingStatus);
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const { setCurrentPlaylist } = useContext(AppContext);

  const handleSignout = async () => {
    await signOutUser();
    console.log('signed out');
    dispatch(SET_LOGOUT_STATE({}));
    setCurrentPlaylist({});
    navigate('/');
    console.log('playlists when signed out', playlists);
    console.log('likedMoviesPlaylist when signed out', likedMoviesPlaylist);
    console.log(userLoadingStatus);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <ContentDiv isOpen={isOpen}>
          {SIDEBAR_ICONS.map((icon, index) => (
            <div key={index}>
              <IconDiv key={icon.id} onClick={() => navigate(`${icon.nav}`)}>
                <FontAwesomeIcon icon={icon.tag} />
                <h3>{icon.name}</h3>
              </IconDiv>
            </div>
          ))}

          <ProfileDiv>
            <Profile />
            <span>{null ? '' : currentUser?.email}</span>

            <Tooltip id='tooltip'>
              <SignOut onClick={handleSignout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Sign Out</p>
              </SignOut>
            </Tooltip>
          </ProfileDiv>
        </ContentDiv>
      </SidebarContainer>
      <Overlay isOpen={isOpen} />
      <Button
        onClick={() => handleClick()}
        buttonType={BUTTON_TYPE_CLASSES.menu}
        isOpen={isOpen}
      >
        <svg className='svg' width='28' height='28' viewBox='0 0 100 100'>
          <path
            className='line line1'
            d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
          />
          <path className='line line2' d='M 20,50 H 80' />
          <path
            className='line line3'
            d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
          />
        </svg>

        {SIDEBAR_ICONS.map((icon, index) => (
          <MobileIcons key={icon.id} onClick={() => navigate(`${icon.nav}`)}>
            <Icon icon={icon.tag} />
            <h3>{icon.name}</h3>
          </MobileIcons>
        ))}
        <MobileProfileDiv>
          <MobileProfileIcon />

          <MobileTooltip>
            <div id='div'>
              <span>{null ? '' : currentUser?.email}</span>

              <SignOut onClick={handleSignout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Sign Out</p>
              </SignOut>
            </div>
          </MobileTooltip>
        </MobileProfileDiv>
      </Button>
    </>
  );
};

export default Sidebar;
