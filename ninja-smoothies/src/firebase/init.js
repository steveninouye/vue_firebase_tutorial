import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDglWLiq2ypi1buJjUwoCsR4VIJ2W1uivc',
  authDomain: 'udemy-ninja-smoothies-f3168.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-smoothies-f3168.firebaseio.com',
  projectId: 'udemy-ninja-smoothies-f3168',
  storageBucket: 'udemy-ninja-smoothies-f3168.appspot.com',
  messagingSenderId: '541677621793'
};
const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore();
