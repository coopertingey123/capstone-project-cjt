import React, { useState, useEffect } from 'react'

export default function baseLogin(props) {

    const[email, setEmail] = useState([""])
    const[password, setPassword] = useState([""])
   

    

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
                <button type="submit">Login as Client</button>
                <button type="submit">Login as</button>
            </div>
            
            <div className="signup-wrapper">
                <a href="/signup">Don't have an account? Register here!</a>
            </div>
        </div>
    )
}