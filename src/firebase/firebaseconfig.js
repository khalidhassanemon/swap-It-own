// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};


// const firebaseConfig = {
//     apiKey: "AIzaSyBVdqANeTNlLcZ65f8XqgpRvGX7FqrFgiw",
//     authDomain: "swap-it-4a25c.firebaseapp.com",
//     projectId: "swap-it-4a25c",
//     storageBucket: "swap-it-4a25c.appspot.com",
//     messagingSenderId: "860651054736",
//     appId: "1:860651054736:web:ecaabb2d4a55f7cee79a15"
//   };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;