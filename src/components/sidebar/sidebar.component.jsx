import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconDiv,
  SidebarContainer,
  UpperDiv,
  ProfileDiv,
  Tooltip,
  Overlay,
} from './sidebar.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Icon } from '../button/button.styles';
import vector from '../../assets/vector.svg';
import { SIDEBAR_ICONS } from './sidebar.icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <UpperDiv isOpen={isOpen}>
          {SIDEBAR_ICONS.map((icon, index) => (
            <div key={index}>
              <IconDiv key={icon.id} onClick={() => navigate(`${icon.nav}`)}>
                <FontAwesomeIcon icon={icon.tag} />
                <h3>{icon.name}</h3>
              </IconDiv>
            </div>
          ))}

          <ProfileDiv />
          <Tooltip>
            <span>{null ? '' : email}</span>
            <p onClick={handleSignout}>Sign Out</p>
          </Tooltip>
        </UpperDiv>
      </SidebarContainer>
      <Overlay isOpen={isOpen} />

      <Button
        buttonType={BUTTON_TYPE_CLASSES.toggleMenu}
        onClick={handleClick}
        isOpen={isOpen}
      >
        <Icon src={vector} alt='menu' isOpen={isOpen} />
      </Button>
    </>
  );
};

export default Sidebar;
