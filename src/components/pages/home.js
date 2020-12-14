import React, { Component } from 'react'
import Cookies from "js-cookie"

export default function home(props) {

    const client = Cookies.get("email")

    function handleLogout() {
        Cookies.remove("email")
    }

    return (
        <div className='home-wrapper'>

            <h1>Garbage girls!</h1>
            <h3>Signed in as {client ? client : "error"}</h3>
            {client ? <button onClick={handleLogout}> Log Out </button> : null}
        </div>
    )
}