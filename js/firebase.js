import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"

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
 export const app = initializeApp(firebaseConfig);
 console.log(app)
 export const auth = getAuth(app)