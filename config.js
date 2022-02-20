import firebase from "firebase";

/// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3jllTAt6YZZuGERmLKDByYRQQibTCwDU",
  authDomain: "hc-app-bce43.firebaseapp.com",
  projectId: "hc-app-bce43",
  storageBucket: "hc-app-bce43.appspot.com",
  messagingSenderId: "410060234891",
  appId: "1:410060234891:web:3340c9ff34953aa7acf48e"
};
  // Initialize Firebase
  
 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()