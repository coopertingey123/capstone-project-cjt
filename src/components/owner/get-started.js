import React, { Component } from 'react'
import Navbar from "../navigation/loggedIn"

export default function getStarted(props) {



    return (
        <div className='home-wrapper'>
            <Navbar/>
            <div className="search-for-client">
                <h1>Get Started!</h1>
                <div className="text-wrapper">
                   <p>Starting your own business is easy! Now
                        that you have an account, you will be
                         able to sign up clients under your name.</p>
                   <p>The "Add Clients" link at the top will
                        take you to a page that lets you sign up clients.</p>
                   <p>Simply go door to door, asking your neighbors
                        if they would like to sign up, for however
                         much you would like to charge them.</p>
                   <p>(Most business owners charge around $10 a month)</p>
                   <p>Once you sign up a client, you will 
                       have access to their email address, 
                       where you can send them a Paypal invoice 
                       once a month.</p>
                   <p>At the top in the My Clients section, 
                       you will be able to see the clients you 
                       have signed up, and filter through them 
                       based on the day of the week their garbage
                        man comes.</p>

                </div>
            </div>

        </div>
    )
}