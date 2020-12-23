import React, { Component } from 'react'
import Navbar from "../navigation/loggedIn"
import Footer from "../navigation/footer"
import AddClientsImage from "../../../static/assets/images/sign-up.jpg"
import SalesmanImage from "../../../static/assets/images/salesman.png"
import MyClientsImage from "../../../static/assets/images/my-clients.jpg"


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
                    <div className="add-clients-image">
                        <img src={AddClientsImage} alt=""/>
                    </div>
                   <p>Simply go door to door, asking your neighbors
                        if they would like to sign up, for however
                         much you would like to charge them.</p>
                   <p>(Most business owners charge around $10 a month)</p>
                   <div className="salesman-image">
                        <img src={SalesmanImage} alt=""/>
                   </div>
                   <p>Once you sign up a client, you will 
                       have access to their email address, 
                       where you can send them a Paypal invoice 
                       once a month.</p>
                   <p>At the top in the My Clients section, 
                       you will be able to see the clients you 
                       have signed up, and filter through them 
                       based on the day of the week their garbage
                        man comes.</p>
                    <div className="my-clients-image">
                        <img src={MyClientsImage} alt=""/>
                    </div>
                    <p>Last step is to grow your business! Talk to neighbors, 
                        friends, or family to get them started and grow your 
                        Trash Time small business!
                    </p>

                </div>
            </div>
            <Footer/>

        </div>
    )
}