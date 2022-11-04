import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQnF8_PvMcMFBJSqhHBjnZ6EGaaX-G9vE",
    authDomain: "loginauthjap.firebaseapp.com",
    projectId: "loginauthjap",
    storageBucket: "loginauthjap.appspot.com",
    messagingSenderId: "892651063501",
    appId: "1:892651063501:web:b2f5e6ae4883d2d6d6c184"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  

  document.getElementById("boton-google").addEventListener("DOMContentLoaded", function (){
      signInWithPopup()
  })