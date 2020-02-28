import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_CmMuShe85MAj6NP-gaqoLRRGZY_-VNY",
  authDomain: "frontend-2019-3.firebaseapp.com",
  databaseURL: "https://frontend-2019-3.firebaseio.com",
  projectId: "frontend-2019-3",
  storageBucket: "frontend-2019-3.appspot.com",
  messagingSenderId: "708646173603",
  appId: "1:708646173603:web:48d96ad5dbea2ffea9b816"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
