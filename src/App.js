import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { onAuthStateChangedListener } from './utils/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import MyListPage from './pages/MyListPage';
import {
  selectUser,
  selectUserLoadingStatus,
  SET_CURRENT_USER,
  SET_VIEW,
} from './store/user/user.slice';
import {
  EDIT_PLAYLIST,
  FETCH_PLAYLISTS,
  selectAllPlaylists,
} from './store/mylist/mylist.slice';
import {
  FETCH_LIKED_MOVIES,
  selectLikedMoviesPlaylist,
} from './store/movies/movies.slice';
import { ToastContainer } from 'react-toastify';
import EmailVerifiedOverlay from './components/EmailVerifiedOverlay';

function App() {
  const currentUser = useSelector(selectUser);
  const playlists = useSelector(selectAllPlaylists);
  const likedMoviesPlaylist = useSelector(selectLikedMoviesPlaylist);
  const userLoadingStatus = useSelector(selectUserLoadingStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe;

    const getUser = () => {
      unsubscribe = onAuthStateChangedListener(async (user) => {
        if (!user) {
          console.log('no currentUser');
        } else {
          const userAuth = user;

          await dispatch(
            SET_CURRENT_USER({
              uid: userAuth.uid,
              email: userAuth.email,
              emailVerified: userAuth.emailVerified,
            })
          );
          dispatch(FETCH_PLAYLISTS({ currentUser }));
          dispatch(FETCH_LIKED_MOVIES({ currentUser }));
          console.log('onAuthStateChanged response', user);
          console.log('currentUser', currentUser);
        }
      });
    };
    getUser();
    return unsubscribe;
    // eslint-disable-next-line
  }, [currentUser]);

  useEffect(() => {
    console.log('likedMoviesPlaylist', likedMoviesPlaylist);
  }, [likedMoviesPlaylist]);

  useEffect(() => {
    if (userLoadingStatus === 'failed') {
      alert('Loading failed');
    }
    console.log('userLoadingStatus', userLoadingStatus);
  }, [userLoadingStatus]);

  useEffect(() => {
    playlists.map((playlist) => {
      playlist.movies.map((movie) => {
        likedMoviesPlaylist.movies?.forEach((likedMovie) => {
          if (movie.id === likedMovie.id) {
            movie = { ...likedMovie };
          } else {
            movie = { ...likedMovie, isLiked: false };
          }
        });
        return movie;
      });
      return playlist;
    });
    playlists.forEach((playlist) => {
      dispatch(EDIT_PLAYLIST({ currentUser, currentPlaylist: playlist }));
    });
  }, [likedMoviesPlaylist]);

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth < 769) {
        dispatch(SET_VIEW('grid'));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/mylist' element={<MyListPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <EmailVerifiedOverlay />
      <ToastContainer
        theme='dark'
        position='bottom-center'
        hideProgressBar={true}
      />
    </>
  );
}

export default App;
