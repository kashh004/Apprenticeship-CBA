import { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Sign in with Google
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // Sign out
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const avatar = user?.photoURL || "https://via.placeholder.com/80";

  return (
    <div className="container">
      <div className="auth-card">
        <h1 className="title">Google Authentication</h1>
        {user ? (
          <div className="profile">
            <img src={avatar} alt="Profile" className="avatar" />
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="login-btn" onClick={handleLogin}>Sign in with Google</button>
        )}
      </div>
    </div>
  );
}

export default App;