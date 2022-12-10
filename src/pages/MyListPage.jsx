import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getView, SET_VIEW } from '../store/user/user.slice';
import { selectAllPlaylists } from '../store/mylist/mylist.slice';
import { selectLikedMoviesPlaylist } from '../store/movies/movies.slice';
import Sidebar from '../components/sidebar/Sidebar';
import {
  MyListPageContainer,
  Table,
  ContentDiv,
  Movies,
} from '../styles/mylist-page.styles';
import MyMovies from '../components/MyMovies';
import { AppContext } from '../context/AppContext';
import LeftPane from '../features/MyListPage/components/LeftPane';
import Prompt from '../features/MyListPage/components/Prompt';
import Heading from '../features/MyListPage/components/Heading';
import CreatePlaylistBtn from '../features/MyListPage/components/CreatePlaylistBtn';
import ViewLikedMoviesBtn from '../features/MyListPage/components/ViewLikedMoviesBtn';
import Playlists from '../components/Playlists';
import { BackBtn } from '../styles/mylist-page.styles';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const MyListPage = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const userView = useSelector(getView);

  const { currentPlaylist, setCurrentPlaylist, showContent, setShowContent } =
    useContext(AppContext);

  useEffect(() => {
    playlists.map((playlist, index) => {
      if (playlist.id === currentPlaylist.id) {
        setCurrentPlaylist(playlist);
      }
    });
    if (currentPlaylist.id === likedMoviesPlaylist.id) {
      setCurrentPlaylist(likedMoviesPlaylist);
    }
  }, [playlists, likedMoviesPlaylist]);

  let windowWidth = window.innerWidth;

  return (
    <>
      <Sidebar />
      <MyListPageContainer value={userView}>
        <Table value={userView}>
          <LeftPane>
            <CreatePlaylistBtn />
            <ViewLikedMoviesBtn />
            <Playlists />
          </LeftPane>
          <ContentDiv show={showContent}>
            <Heading />
            {windowWidth < 503 && (
              <BackBtn
                value={windowWidth}
                icon={faLeftLong}
                onClick={() => setShowContent(false)}
              />
            )}
            <Movies value={userView}>
              <MyMovies />
            </Movies>
          </ContentDiv>
        </Table>

        <Prompt />
      </MyListPageContainer>
    </>
  );
};

export default MyListPage;
