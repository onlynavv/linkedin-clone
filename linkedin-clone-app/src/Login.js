import React from 'react'
import './Login.css'
import logo from './linkedin.png'
import { auth,provider } from './firebase'
import hero from './login-hero.svg'
import googleIcon from './google.svg'

const Login = () => {

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }

    return (
        <>
        <div className='login-container'>
            <nav className='loginNav-container'>
                    <img src={logo} alt='logo' className='login-logo'></img>
            </nav>
        </div>
        <section className='login-section'>
            <div className='hero'>
                <div>
                    <h1>Welcome to your Professional Community</h1>
                    <div className='login-innerContainer'>
                        <button onClick={signin} className='signIn-button'><img src={googleIcon} alt='google-icon'></img>Sign in with Google</button>
                    </div>
                </div>
                <img src={hero} alt='login-hero'></img>
            </div>
        </section>
        </>
    )
}

export default Login
