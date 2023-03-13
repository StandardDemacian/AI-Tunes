import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import "./AuthPage.css";
import authlogo from "../../page-images/ai-tunes.png";

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="auth-page-grid">
        <div className="auth-page-logo-container">
          <img
            src={authlogo}
            alt={"ai tunes logo in bright pink"}
            id="auth-page-logo"
          />
          <h3>a game of song lyric trivia</h3>
        </div>

        <div className="login-signup-container">
          {showForm ? (
            <>
              <LoginForm setUser={setUser} />
              <div className="switch-auth-form">
                <p>
                  Don't have an account? Click{" "}
                  <span
                    className="login-anchor"
                    onClick={() => setShowForm(!showForm)}
                  >
                    here
                  </span>{" "}
                  to sign up.
                </p>
              </div>
            </>
          ) : (
            <>
              <SignUpForm setUser={setUser} />
              <div className="switch-auth-form">
                <p>
                  Already have an account?{" "}
                  <span
                    className="login-anchor"
                    onClick={() => setShowForm(!showForm)}
                  >
                    Login
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
