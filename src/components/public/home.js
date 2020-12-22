import React, { Component } from 'react'

import Navbar from "../navigation/notLoggedIn"
import CartoonTrashBin from "../../../static/assets/images/home-trash.jpg"

export default function home(props) {

    return (
        <div className="wrapper">
            <Navbar />
            <div className='home-wrapper'>
                <h1>Trash Time!</h1>
                <div className="about-wrapper">
                    Trash Time allows YOU to start up your very own business in your local neighborhood!
                    <div>
                        <img src={CartoonTrashBin}/>
                    </div>
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
                        "Trash Time is the best! I have helped my neighbors, made some money, and gained experience starting up my own business!" -Brayden Adams, 16 years old
                    </div>
                    <div className="quote">
                        "I couldn't get a job anywhere only being 15 with no experience. Trash Time was perfect for me! -Parley Tingey, 15 years old"
                    </div>
                    <div className="quote">
                        "Trash time keeps my kids busy and never asking for more allowance. It was great for my daughter, and now my youngest son has taken over her clients as she is moving out." -Becki Jones, mother of 6
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
        </div>
    )
}