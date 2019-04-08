import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAM0dkEYZt0CRQDOloo21fpNl19ODSNz4A",
    authDomain: "musicapp-67c46.firebaseapp.com",
    databaseURL: "https://musicapp-67c46.firebaseio.com",
    projectId: "musicapp-67c46",
    storageBucket: "musicapp-67c46.appspot.com",
    messagingSenderId: "94590164099"
};

firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {
	storage,
    db,
    auth,
};
