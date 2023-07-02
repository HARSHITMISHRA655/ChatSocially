import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social</h3>
                <span className='loginDesc'>
                    Connect with friends and the world around you on Social Chat.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className='loginInput' placeholder='Username'/>
                    <input className='loginInput' placeholder='Email'/>
                    <input className='loginInput' placeholder='Password'/>
                    <input className="loginInput" placeholder='Confirm Password'/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into your Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

