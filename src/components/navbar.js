import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Cookies from "js-cookie"



export default class Navbar extends Component {
    render() {
        const client = Cookies.get("email")

        function handleLogout() {
            Cookies.remove("email")
        }
        return (
            <div className='navbar-wrapper'>
                <div className="navbar-top-left">
                    <div className="nav-link">
                        Signed in as {client ? client : "guest"}
                    </div> 
                    <Link className="nav-link" to="/home">
                        Home
                    </Link>  

                    <Link className="nav-link" to="/owner">
                        My Business Owner
                    </Link>

                    <Link className="nav-link" to="/my-info">
                        My info
                    </Link>

                </div>
                    


                <div className="navbar-top-right">
                    
                    <div className="nav-link">
                        <button onClick={handleLogout}> Log Out </button>
                    </div>

                </div>
            </div>
        )
}
}