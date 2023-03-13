import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import './AuthPage.css'
import authlogo from '../../images/ai-tunes.png'

export default function AuthPage({setUser}) {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
        <div className="auth-page-logo-container">
            <img src={authlogo} alt={"ai tunes logo in bright pink"} id="auth-page-logo"/>
            <h3>a game of song lyric trivia</h3>
        </div>

            {showForm ? (
            <>
             <LoginForm setUser={setUser}/>
             <p>Don't have an account? Click <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
            <a href="#">here</a>
          </span> to sign up.</p>
            </>
            ) : (
                <>
                <SignUpForm setUser={setUser} />
                <p>
                Already have an account? <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
                  <a href="#">Login</a>
                </span>
              </p>
              </>
            )}
        </>
    )}
