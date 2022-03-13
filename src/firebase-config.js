// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBPk3eRa08HodK1aN6WCHYDsyUal7UtovA',
  authDomain: 'react-messenger-c5ef2.firebaseapp.com',
  databaseURL: 'http://react-messenger-c5ef2.firebaseio.com',
  projectId: 'react-messenger-c5ef2',
  storageBucket: 'react-messenger-c5ef2.appspot.com',
  messagingSenderId: '970540429954',
  appId: '1:970540429954:web:7ecf22134d3dd9beadfa9b',
  measurementId: "G-0ZF09TLJYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage= getStorage(app);

export { auth,db, storage };