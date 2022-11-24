import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';

import {
  collection,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  updateDoc,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyCxWbFP3vXUXocpZmixWfJ7J_agPiFOGrs',
  // authDomain: 'tmdb-redux-db.firebaseapp.com',
  // projectId: 'tmdb-redux-db',
  // storageBucket: 'tmdb-redux-db.appspot.com',
  // messagingSenderId: '205216283447',
  // appId: '1:205216283447:web:65a7d098bfdac5de8fb8b2',
  apiKey: 'AIzaSyDafdYhuccV4_mFZGB7JW82vWO6HYIZmJA',
  authDomain: 'tmdb-api-8dab7.firebaseapp.com',
  projectId: 'tmdb-api-8dab7',
  storageBucket: 'tmdb-api-8dab7.appspot.com',
  messagingSenderId: '886691419178',
  appId: '1:886691419178:web:96ae8890e622c9622a9f53',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = async () => {
  console.log('triggered signInWithGoogleRedirect');
  await signInWithRedirect(auth, googleProvider);
};

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, emailVerified } = userAuth;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      emailVerified,
    });
  }
};

export const sendAuthEmailVerification = async (userAuth) => {
  return await sendEmailVerification(userAuth);
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const user = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);

  var actionCodeSettings = {
    url:
      'http://localhost:3000/tmdb-app#/home/?email=' + auth.currentUser.email,
  };

  await sendEmailVerification(user.user, actionCodeSettings).then(() => {
    console.log('email verified');
  });

  return user;
};

export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const sendUserPasswordResetEmail = async (auth, email) => {
  var actionCodeSettings = {
    url: 'http://localhost:3000/tmdb-app#/',
  };

  return await sendPasswordResetEmail(auth, email, actionCodeSettings);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const createPlaylistDoc = async (currentUser, playlist) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = collection(docRef, 'playlists');

  const newDoc = await addDoc(colRef, {
    ...playlist,
  });

  await updateDoc(newDoc, { id: newDoc.id });
};

export const editPlaylistDoc = async (currentUser, playlist) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);
  const playlistRef = doc(docRef, 'playlists', playlist.id);

  // const newDoc = await addDoc(colRef, {
  //   ...playlist,
  // });

  await updateDoc(playlistRef, { ...playlist });
};

export const deletePlaylistDoc = async (currentUser, playlist) => {
  if (!currentUser) return;

  // const docRef = doc(db, 'users', currentUser.uid);
  const colRef = doc(db, 'users', currentUser.uid, 'playlists', playlist.id);

  await deleteDoc(colRef);
  console.log(playlist.name + 'deleted');
};

export const fetchPlaylists = async (currentUser) => {
  if (!currentUser) return;

  let p = [];
  const playlistsRef = collection(db, 'users', currentUser.uid, 'playlists');
  const q = query(playlistsRef, orderBy('createDate', 'desc'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    let firestoreTime = doc.get('createDate');
    let firestoreTimestamp = firestoreTime.toDate();
    firestoreTimestamp = firestoreTimestamp.toISOString();
    console.log(firestoreTimestamp);

    p.push({
      ...doc.data(),
      id: doc.id,
      createDate: firestoreTimestamp,
    });
  });
  console.log('playlists', p);

  return p;
};

export const addMovieToPlaylist = async (
  currentUser,
  movieToAdd,
  selectedPlaylist
) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);

  const playlistRef = doc(docRef, 'playlists', selectedPlaylist.id);
  console.log('movieToAdd', movieToAdd);
  console.log('selectedPlaylist', selectedPlaylist);

  await updateDoc(playlistRef, {
    movies: arrayUnion(movieToAdd),
  });
};

export const deleteMovieFromPlaylist = async (
  currentUser,
  movieToDelete,
  selectedPlaylist
) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);

  const playlistRef = doc(docRef, 'playlists', selectedPlaylist.id);
  console.log('movieToDelete', movieToDelete);
  console.log('selectedPlaylist', selectedPlaylist);

  await updateDoc(playlistRef, {
    movies: arrayRemove(movieToDelete),
  });
};

export const createLikedMoviesDoc = async (currentUser) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = collection(docRef, 'likedMovies');

  const newDoc = await addDoc(colRef, {
    id: '',
    name: 'Liked Movies',
    createDate: new Date(),
    movies: [],
  });

  await updateDoc(newDoc, { id: newDoc.id });

  const docSnapshot = await getDocs(colRef);

  let likedMoviesPlaylist = {};
  docSnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    let firestoreTime = doc.get('createDate');
    let firestoreTimestamp = firestoreTime.toDate();
    firestoreTimestamp = firestoreTimestamp.toISOString();
    likedMoviesPlaylist = {
      ...doc.data(),
      id: doc.id,
      createDate: firestoreTimestamp,
    };
  });
  return likedMoviesPlaylist;
};

export const addToLikedMovies = async (
  currentUser,
  likedMovie,
  likedMoviesPlaylist
) => {
  if (!currentUser) return;
  console.log('currentUser', currentUser);
  console.log('likedMovie', likedMovie);
  console.log('likedMoviesPlaylist', likedMoviesPlaylist);

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = doc(docRef, 'likedMovies', likedMoviesPlaylist.id);

  await updateDoc(colRef, {
    movies: arrayUnion(likedMovie),
  });
};

export const removeFromLikedMovies = async (
  currentUser,
  likedMovieToRemove,
  likedMoviesPlaylist
) => {
  if (!currentUser) return;
  console.log('currentUser', currentUser);
  console.log('likedMovieRemoved', likedMovieToRemove);
  console.log('likedMoviesPlaylist', likedMoviesPlaylist);

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = doc(docRef, 'likedMovies', likedMoviesPlaylist.id);

  await updateDoc(colRef, {
    movies: arrayRemove(likedMovieToRemove),
  });
};

export const fetchLikedMovies = async (currentUser) => {
  if (!currentUser) return;

  let likedMovies = {};
  const likedMoviesRef = collection(
    db,
    'users',
    currentUser.uid,
    'likedMovies'
  );
  const docSnapshot = await getDocs(likedMoviesRef);
  //console.log(docSnapshot);

  docSnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    let firestoreTime = doc.get('createDate');
    let firestoreTimestamp = firestoreTime.toDate();
    firestoreTimestamp = firestoreTimestamp.toISOString();
    likedMovies = {
      ...doc.data(),
      id: doc.id,
      createDate: firestoreTimestamp,
    };
  });
  return likedMovies;
};
