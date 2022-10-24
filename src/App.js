import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { onAuthStateChangedListener } from './utils/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import HomePage from './components/pages/HomePage';
import MyListPage from './components/pages/MyListPage';
import { selectUser, SET_CURRENT_USER } from './store/user/user.slice';
import {
  FETCH_PLAYLISTS,
  selectAllPlaylists,
} from './store/mylist/mylist.slice';
import { FETCH_LIKED_MOVIES } from './store/movies/movies.slice';

function App() {
  const currentUser = useSelector(selectUser);
  const playlists = useSelector(selectAllPlaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        console.log('currentUser', currentUser);
      } else {
        const { uid, email } = user;
        dispatch(SET_CURRENT_USER({ uid, email }));
        dispatch(FETCH_PLAYLISTS({ currentUser }));
        dispatch(FETCH_LIKED_MOVIES({ currentUser }));
        console.log(user);
        console.log('currentUser', currentUser);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/mylist' element={<MyListPage />} />

      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
