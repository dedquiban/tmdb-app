import { createContext, useState } from 'react';

export const AppContext = createContext({
  isModalActive: false,
  setIsModalActive: () => {},
  isMobileModalActive: false,
  setIsMobileModalActive: () => {},
  currentPlaylist: {},
  setCurrentPlaylist: () => {},
  isEmailOverlayActive: false,
  setIsEmailOverlayActive: () => {},

  isUpdatePwActive: false,
  setIsUpdatePwActive: () => {},
});

export const AppProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(null);
  const [isMobileModalActive, setIsMobileModalActive] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [isEmailOverlayActive, setIsEmailOverlayActive] = useState(false);
  const [isUpdatePwActive, setIsUpdatePwActive] = useState(false);

  const value = {
    isModalActive,
    setIsModalActive,
    isMobileModalActive,
    setIsMobileModalActive,
    currentPlaylist,
    setCurrentPlaylist,
    isEmailOverlayActive,
    setIsEmailOverlayActive,
    isUpdatePwActive,
    setIsUpdatePwActive,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
