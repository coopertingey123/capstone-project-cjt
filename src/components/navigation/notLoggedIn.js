import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default function navbarIfNotLoggedIn(props) {
    return (
        <div className='navbar-wrapper'>
            
            <div className="nav-side">
                <h2>TRASH TIME!</h2>
            </div>
            <div className="nav-link-wrapper">
                <Link className="nav-link" to="/">
                    Home
                </Link>  
            </div>
            <div className="nav-link-wrapper">
                <Link className="nav-link" to="/owner-search">
                    Search for Business Owners
                </Link>
            </div>
            <div className="nav-link-wrapper">
                <Link className="nav-link" to="/signup-as-owner">
                    Become a Business Owner
                </Link>
            </div>
            
                
            <div className="nav-side">
                <Link className="nav-link" to="/login">
                    <button>LOGIN</button>
                </Link>
            </div>
                
            
        </div>
    )
}