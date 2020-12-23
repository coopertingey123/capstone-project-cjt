import React, { Component } from 'react'



import Navbar from "../navigation/notLoggedIn"
import PushingGarbageBin from "../../../static/assets/images/pushinggarbagecan.jpg"
import Footer from "../navigation/footer"

export default function home(props) {

    return (
        <div className="wrapper">
            <Navbar />
            <div className='home-wrapper'>
                <h1>Trash Time!</h1>
                <div className="about-wrapper">
                    Trash Time allows YOU to start up your own business in your local neighborhood!
                    <div>
                        <img src={PushingGarbageBin}/>
                    </div>
                    Get paid to roll your neighbors' trash bins out to the street before their garbage man comes <br/><br/>
                </div>
                <div className="get-started">
                    <a href="signup-as-owner">Click here to get started!</a>
                </div>
                <div className="reviews">
                    <div className="quote">
                        "Trash Time is the best! I have helped my neighbors, made some money, and gained experience starting up my own business!"<br/><br/> -Brayden Adams, 16 years old
                    </div>
                    <div className="quote">
                        "I couldn't get a job anywhere only being 15 with no experience. Trash Time was perfect for me!"<br/><br/> -Parley Tingey, 15 years old
                    </div>
                    <div className="quote">
                        "Trash time keeps my kids busy and never asking for more allowance. It was great for my daughter, and now my youngest son has taken over her clients as she is moving out."<br/><br/> -Becki Jones, mother of 7
                    </div>
                </div>
                
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}