import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const sendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA solved");
            },
          }
        );
      }

      const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setVerificationId(confirmation);
      alert("OTP sent to " + formattedPhone);
    } catch (error) {
      console.error("OTP Send Error:", error);
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await verificationId.confirm(otp);
      alert("Phone verified! MFA complete.");
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setPhone("");
    setOtp("");
    setVerificationId(null);
  };

  return (
    <div className="container">
      <div className="auth-card">
        <h1 className="title">MFA Authentication</h1>

        {!user ? (
          <button className="login-btn" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
        ) : (
          <>
            <p>Welcome, {user.displayName}</p>
            {!verificationId ? (
              <div>
                <input
                  type="text"
                  placeholder="Enter phone (e.g., +91...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div id="recaptcha-container"></div>
                <button className="otp-btn" onClick={sendOtp}>
                  Send OTP
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button className="verify-btn" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </div>
            )}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
