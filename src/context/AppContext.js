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

  isOverviewActive: false,
  setIsOverviewActive: () => {},

  showContent: false,
  setShowContent: () => {},
});

export const AppProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(null);
  const [isMobileModalActive, setIsMobileModalActive] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [isEmailOverlayActive, setIsEmailOverlayActive] = useState(false);
  const [isUpdatePwActive, setIsUpdatePwActive] = useState(false);
  const [isOverviewActive, setIsOverviewActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

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
    isOverviewActive,
    setIsOverviewActive,
    showContent,
    setShowContent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
