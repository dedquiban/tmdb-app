import React, { useState } from 'react';
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
} from '../../styles/sidebar.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import { SIDEBAR_ICONS } from './sidebar.icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { selectUser, SET_LOGOUT_STATE } from '../../store/user/user.slice';

const Sidebar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const { email } = currentUser;

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const handleSignout = async () => {
    await signOutUser();
    console.log('signed out');
    dispatch(SET_LOGOUT_STATE(null));
    navigate('/');
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
            <span>{null ? '' : email}</span>

            <Tooltip id='tooltip'>
              <div onClick={handleSignout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Sign Out</p>
              </div>
            </Tooltip>
          </ProfileDiv>
        </ContentDiv>
      </SidebarContainer>
      <Overlay isOpen={isOpen} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.menu}
        onClick={handleClick}
        isOpen={isOpen}
      >
        <svg width='28' height='28' viewBox='0 0 100 100'>
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
      </Button>
    </>
  );
};

export default Sidebar;
