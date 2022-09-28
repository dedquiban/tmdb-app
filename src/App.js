import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { onAuthStateChangedListener } from "./utils/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/home/HomePage";
import MyListPage from "./pages/mylist/MyListPage";
import { selectUser, SET_CURRENT_USER } from "./store/user/user.slice";

function App() {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        console.log("currentUser", currentUser);
      } else {
        const { email } = user;
        dispatch(SET_CURRENT_USER(email));
        console.log(user);
        console.log("currentUser", currentUser);
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
