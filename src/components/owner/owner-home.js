import React, { Component } from 'react'
import Navbar from "./owner-navbar"

export default function home(props) {
    return (
        <div className='home-wrapper'>
            
            <div className="navbar-wrapper">
                <Navbar/>
            </div>

            <div className="search-for-client">
                <h1>This is the search bar for where I find my clients and their information.</h1>
            </div>

            <div className="clients">
                <h1>This page shows all clients</h1>
            </div>

        </div>
    )
}