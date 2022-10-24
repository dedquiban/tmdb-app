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
  deleteDoc,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxWbFP3vXUXocpZmixWfJ7J_agPiFOGrs',
  authDomain: 'tmdb-redux-db.firebaseapp.com',
  projectId: 'tmdb-redux-db',
  storageBucket: 'tmdb-redux-db.appspot.com',
  messagingSenderId: '205216283447',
  appId: '1:205216283447:web:65a7d098bfdac5de8fb8b2',
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

export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

// export const createCurrentPlaylistDoc = async (
//   currentUser,
//   currentPlaylist
// ) => {
//   if (!currentUser) return;

// const docRef = doc(db, 'users', currentUser.uid);
// const colRef = collection(docRef, 'currentPlaylist');
// console.log(currentPlaylist);
// const q = query(colRef, where('currentPlaylist', '==', currentPlaylist.id));
// console.log(q);
// const querySnapshot = await getDocs(q);

// if (!querySnapshot.empty) {
//   const ref = doc(docRef, 'currentPlaylist', currentPlaylist.id);

//   let c = {};
//   await setDoc(ref, { ...currentPlaylist });
//   const snapshot = await getDocs(q);
//   snapshot.forEach((doc) => {
//     c = { ...doc.data() };
//   });
//     return c;
//   } else {
//     const newDoc = await addDoc(colRef, {
//       ...currentPlaylist,
//     });
//     await updateDoc(newDoc, { id: newDoc.id });
//     const snapshot = await getDocs(newDoc);
//     let c = {};
//     snapshot.forEach((doc) => {
//       c = { ...doc.data() };
//     });

//     return c;
//   }
// };

// export const setCurrentPlaylistDoc = async (currentUser, currentPlaylist) => {
//   // const docRef = doc(db, 'users', currentUser.uid);
//   const docRef = doc(
//     db,
//     'users',
//     currentUser.uid,
//     'currentPlaylist',
//     currentPlaylist.id
//   );
//   console.log(currentPlaylist);
//   const docSnapshot = await getDoc(docRef);
//   let c = {};
//   return (c = docSnapshot.data());
// };

export const createPlaylistDoc = async (currentUser, playlist) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = collection(docRef, 'playlists');

  const newDoc = await addDoc(colRef, {
    ...playlist,
  });

  await updateDoc(newDoc, { id: newDoc.id });
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

  /*    */
  // const playlistsRef = collection(db, 'users', currentUser.uid, 'playlists');
  // const q = query(playlistsRef, orderBy('createDate', 'desc'));

  // let p = [];
  // const p = onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.docs.map((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //     const newDoc = doc.data();

  //     let firestoreTimestamp = doc.get('createDate');
  //     firestoreTimestamp = firestoreTimestamp.toDate();
  //     newDoc.createDate = firestoreTimestamp;

  //     // p.push({
  //     //   ...doc.data(),
  //     //   id: doc.id,
  //     //   createDate: JSON.stringify(firestoreTimestamp),
  //     // });

  //     console.log(newDoc);
  //     return newDoc;
  //   });
  // });
  // console.log('p', p);

  /*       */
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
  console.log(p);

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

export const createLikedMovieDoc = async (currentUser, likedMovie) => {
  if (!currentUser) return;

  const docRef = doc(db, 'users', currentUser.uid);
  const colRef = collection(docRef, 'likedMovies');

  addDoc(colRef, {
    ...likedMovie,
  });
};

export const fetchLikedMovies = async (currentUser) => {
  if (!currentUser) return;

  let likedMovies = [];
  const likedMoviesRef = collection(
    db,
    'users',
    currentUser.uid,
    'likedMovies'
  );
  const docSnapshot = await getDocs(likedMoviesRef);
  //console.log(docSnapshot);

  docSnapshot.forEach((doc) => {
    // console.log(doc.id, ' => ', doc.data());
    likedMovies.push(doc.data());
  });
  return likedMovies;
};
