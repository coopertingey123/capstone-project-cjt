import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default function navbarIfNotLoggedIn(props) {
    return (
        <div className='navbar-wrapper'>
            <div className="navbar-top-left">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>  
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/owner">
                        Search for Business Owners
                    </Link>
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/signup-as-owner">
                        Become a Business Owner
                    </Link>
                </div>
                
                <div className="navbar-top-right">   
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/login">
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}