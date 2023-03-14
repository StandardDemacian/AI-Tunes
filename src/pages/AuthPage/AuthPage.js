import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import "./AuthPage.css"
import authlogo from "../../page-images/ai-tunes.png"

export default function AuthPage({ setUser }) {
 const [showForm, setShowForm] = useState(false)

 return (
  <>
   <div className="auth-page-grid">
    <div className="login-signup-container">
     {showForm ? (
      <>
       <LoginForm setUser={setUser} />
       <div className="switch-auth-form">
        <div id="click-to-sign-up">
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

    <div className="auth-page-logo-container">
     <img
      src={authlogo}
      alt={"ai tunes logo in bright pink"}
      id="auth-page-logo"
     />
     <div id="h3">
      <div id="h3-auth-page-shake-animation">
      <h3>a song lyric trivia game</h3>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}