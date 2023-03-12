import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import './AuthPage.css'

export default function AuthPage({setUser}) {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <h2></h2>

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
