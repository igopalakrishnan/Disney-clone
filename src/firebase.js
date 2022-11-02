import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNwawR1cbvZayxbDY9xw5bTnx8HygKdPI",
    authDomain: "disney-clone-8ad44.firebaseapp.com",
    projectId: "disney-clone-8ad44",
    storageBucket: "disney-clone-8ad44.appspot.com",
    messagingSenderId: "518167767952",
    appId: "1:518167767952:web:b952e3a84d975ec0dc6115"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;