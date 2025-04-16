// auth.js
import { auth } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Inscription
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Connexion
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Déconnexion
export function logoutUser() {
  return signOut(auth);
}
