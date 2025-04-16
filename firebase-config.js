// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr-e6LUMHgtir1wx6tM7K2W-pnj691RoA",
  authDomain: "geniuscash-ai.firebaseapp.com",
  projectId: "geniuscash-ai",
  storageBucket: "geniuscash-ai.appspot.com",
  messagingSenderId: "81212590697",
  appId: "1:81212590697:web:43c0c01d239c4c076630f8",
  measurementId: "G-MG4B33Z0NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
