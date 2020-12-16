import React, { Component } from 'react'
import Navbar from "./owner-navbar"

export default function getStarted(props) {
    return (
        <div className='home-wrapper'>
            <Navbar/>
            <div className="search-for-client">
                <h1>Get Started!</h1>
                <h3>This is the place where I tell you how to grow your business. I will give tips and tricks and show you new features</h3>
            </div>

        </div>
    )
}