
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBx6xnqPwJrEK__lWn5S3jnf4HlyNv9Fa4",
    authDomain: "babysitterkoda-1a3df.firebaseapp.com",
    databaseURL: "https://babysitterkoda-1a3df.firebaseio.com",
    projectId: "babysitterkoda-1a3df",
    storageBucket: "babysitterkoda-1a3df.appspot.com",
    messagingSenderId: "936984310463",
    appId: "1:936984310463:web:9682c9731b497e04ca8c0a",
    measurementId: "G-38XKFHZ5NZ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;