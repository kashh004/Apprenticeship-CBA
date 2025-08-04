// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase Config from console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "auth-app-5f27d.firebaseapp.com",
  projectId: "auth-app-5f27d",
  storageBucket: "auth-app-5f27d.appspot.com",
  messagingSenderId: "222332866869",
  appId: "1:222332866869:web:ed0ce7cccf85ee6d977c7c",
  measurementId: "G-W00C900BF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth & Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
