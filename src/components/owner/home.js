import React from 'react'

export default function home(props) {
    return (
        <div className='home-wrapper'>

            <div className="navbar-wrapper">
                <div className="my-profile">
                    My Profile
                </div>
                <div className="my-clients">
                    My clients
                </div>
                <div className="add-new-client">
                    Add client
                </div>
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