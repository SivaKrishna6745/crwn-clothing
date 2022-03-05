import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyCw0KQ-IHbt8lIqj6I0YsJSkqWhQ_KNYLM",
    authDomain: "crwn-db-1ab93.firebaseapp.com",
    projectId: "crwn-db-1ab93",
    storageBucket: "crwn-db-1ab93.appspot.com",
    messagingSenderId: "290949361132",
    appId: "1:290949361132:web:9ae58e176105286f5b64c9",
    measurementId: "G-G1LFRPVCDW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
