import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBfGReAsZOnwlZ7mnxUixtY-tca40piwY",
  authDomain: "mfa-auth-project.firebaseapp.com",
  projectId: "mfa-auth-project",
  storageBucket: "mfa-auth-project.appspot.com",
  messagingSenderId: "1031280995496",
  appId: "1:1031280995496:web:b0b81b8ec10d9900daa69d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Export functions needed for phone auth
export { signInWithPhoneNumber, RecaptchaVerifier };
