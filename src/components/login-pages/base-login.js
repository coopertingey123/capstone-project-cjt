import React from 'react'

export default function baseLogin(props) {
    return (
        <div className='base-login-wrapper'>
            <div className="welcome-wrapper">
                {/* logo goes here */}
                <h1>Garbage Girls</h1>
            </div>
            <div className="username-wrapper">
                Email
                <input type="text" placeholder="example@yahoo.com"/>
            </div>
            
            <div className="password-wrapper">
                Password
                <input type="password" placeholder="password"/>
            </div>
            
            <div className="login-wrapper">
                <button type="submit">Login</button>
            </div>
            
            <div className="register-wrapper">
                <a href="/registration-page">Don't have an account? Register here!</a>
            </div>
        </div>
    )
}