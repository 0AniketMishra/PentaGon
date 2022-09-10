// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/auth"
import { getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDHPMbzUEnmBauY5_jUzMc3Ev06A2Djwrs",
    authDomain: "pentagon-89b4a.firebaseapp.com",
    projectId: "pentagon-89b4a",
    storageBucket: "pentagon-89b4a.appspot.com",
    messagingSenderId: "570154408830",
    appId: "1:570154408830:web:6dce003a2c36bd6d94b12f",
    measurementId: "G-L0NDCYS9WM"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :  firebase.app()
const db = app.firestore();
const auth = getAuth()
const provider = new GoogleAuthProvider()
export {db , auth, provider };