import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc-NjTv3oMUyK7ddedh3Aru8H_tohiOyU",
    authDomain: "linkedin-clone-611ce.firebaseapp.com",
    projectId: "linkedin-clone-611ce",
    storageBucket: "linkedin-clone-611ce.appspot.com",
    messagingSenderId: "1096060272639",
    appId: "1:1096060272639:web:ed3f8664ea2c26a16c31ca",
    measurementId: "G-64CGQGTV2Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

export {auth, provider, storage};
export default db;