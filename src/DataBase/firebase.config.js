// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const REACT_APP_FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
const REACT_APP_FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID
const REACT_APP_FIREBASE_MESSAGINGSENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID
// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_KEY,
//   authDomain: "unplatforms-003.firebaseapp.com",
//   projectId: "unplatforms-003",
//   storageBucket: "unplatforms-003.appspot.com",
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
//   appId: REACT_APP_FIREBASE_APP_ID,
//   measurementId: "G-MCC953WVVD"
// };
const firebaseConfig = {
  apiKey: "AIzaSyApYYj6PGlVokFwAfC6mN2DIx0KzG1w6ZA",
  authDomain: "unplatforms-003.firebaseapp.com",
  projectId: "unplatforms-003",
  storageBucket: "unplatforms-003.appspot.com",
  messagingSenderId: "908015979030",
  appId: "1:908015979030:web:07c76a271928db5a8f8337",
  measurementId: "G-MCC953WVVD"
};
firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore()
export {firebase}