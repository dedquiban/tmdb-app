import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, getView, SET_VIEW } from '../../store/user/user.slice';
import {
  CREATE_PLAYLIST,
  FETCH_PLAYLISTS,
  selectAllPlaylists,
} from '../../store/mylist/mylist.slice';
import { selectLikedMoviesPlaylist } from '../../store/movies/movies.slice';
import Sidebar from '../sidebar/Sidebar';
import {
  MyListContainer,
  Group,
  ContentDiv,
  ToggleDiv,
  Div,
  Movies,
  Overlay,
  Modal,
  Input,
  Button,
  Name,
  FaXmark,
  MobileContainer,
  BottomPane,
  TopPane,
} from '../../styles/mylist-page.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faTableCellsLarge,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import MyMovies from '../MyMovies';
import { AppContext } from '../../context/AppContext';
import LeftPane from '../LeftPane';
import CurrentPlaylistMenu from '../CurrentPlaylistMenu';
import Playlists from '../Playlists';

const initialValues = {
  playlistName: '',
};

const MyListPage = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const currentUser = useSelector(selectUser);
  const userView = useSelector(getView);

  const ref = useRef(null);
  const {
    isModalActive,
    setIsModalActive,
    currentPlaylist,
    setCurrentPlaylist,
  } = useContext(AppContext);

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

  let width;

  useEffect(() => {
    width = window.innerWidth;
    console.log(width);

    if (width === 680) {
      dispatch(SET_VIEW('scroll'));
    }
  }, [width]);

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
    <>
      <Sidebar />
      <MyListContainer value={userView}>
        <Group value={userView}>
          <LeftPane />

          <ContentDiv>
            <ToggleDiv>
              <Name value={currentPlaylist.name}>
                <h3>{null ? '' : currentPlaylist.name}</h3>
                {currentPlaylist?.id !== likedMoviesPlaylist?.id && (
                  <CurrentPlaylistMenu />
                )}
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

                <FontAwesomeIcon
                  icon={faSquare}
                  id='scroll'
                  onClick={() => dispatch(SET_VIEW('scroll'))}
                />
                <FontAwesomeIcon
                  icon={faTableCellsLarge}
                  id='grid'
                  onClick={() => dispatch(SET_VIEW('grid'))}
                />
              </Div>
            </ToggleDiv>
            <Movies value={userView}>
              <MyMovies />
            </Movies>
          </ContentDiv>
        </Group>

        <Overlay isActive={isModalActive}>
          <Modal ref={ref} isActive={isModalActive}>
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
                onClick={
                  !playlistName ? () => setIsModalActive(false) : undefined
                }
              >
                <FaXmark icon={faXmark} value={playlistName} />
                <p>{playlistName ? 'Create' : ''}</p>
              </Button>
            </form>
          </Modal>
        </Overlay>
      </MyListContainer>

      <MobileContainer>
        <TopPane>
          <ToggleDiv>
            <Name value={currentPlaylist.name}>
              <h3>{null ? '' : currentPlaylist.name}</h3>
              {currentPlaylist?.id !== likedMoviesPlaylist?.id && (
                <CurrentPlaylistMenu />
              )}
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

              <FontAwesomeIcon
                icon={faSquare}
                id='scroll'
                onClick={() => dispatch(SET_VIEW('scroll'))}
              />
              <FontAwesomeIcon
                icon={faTableCellsLarge}
                id='grid'
                onClick={() => dispatch(SET_VIEW('grid'))}
              />
            </Div>
          </ToggleDiv>
          <MyMovies />
        </TopPane>
        <BottomPane>
          <LeftPane />
        </BottomPane>
        <Overlay isActive={isModalActive}>
          <Modal ref={ref} isActive={isModalActive}>
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
                onClick={
                  !playlistName ? () => setIsModalActive(false) : undefined
                }
              >
                <FaXmark icon={faXmark} value={playlistName} />
                <p>{playlistName ? 'Create' : ''}</p>
              </Button>
            </form>
          </Modal>
        </Overlay>
      </MobileContainer>
    </>
  );
};

export default MyListPage;
