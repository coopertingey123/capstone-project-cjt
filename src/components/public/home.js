import React, { Component } from 'react'

import Navbar from "../navbars/notLoggedIn"

export default function home(props) {

    return (
        <div className='home-wrapper'>
            <Navbar/>
            <h1>Trash Time!</h1>
            <div className="about-wrapper">
                Trash Time allows YOU to start up your very own business in your local neighborhood!
            </div>
            <div className="get-started">
                <a href="signup-as-owner">Click here to get started!</a>
            </div>
            <div className="img-wrapper">
                Insert Image here
            </div>
            <div className="reviews">
                What do business owners have to say?
                <div className="quote">
                    quote 1
                </div>
                <div className="quote">
                    quote 2
                </div>
                <div className="quote">
                    quote 3
                </div>
            </div>
            <div className="search-bar">
                Here is where the search bar should go
            </div>
            <div className="footer">
                <div className="instagram-link">

                </div>
                <div className="contact-info">
                    phone number
                    email
                </div>
            </div>
        </div>
    )
}