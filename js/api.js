// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

window.firebase = firebase;
firebase.initializeApp({
  apiKey: "AIzaSyD2APPEyxCi9vB2olvUgzSsbgH1Pyz-as0",
  storageBucket: "sandtable-8d0f7.appspot.com",
  authDomain: "sandspiel.club",
  projectId: "sandtable-8d0f7"
});

const storage = firebase.storage();
const functions = firebase.functions();

export { functions, storage };
