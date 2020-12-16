import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Cookies from "js-cookie"



export default class PublicNavbar extends Component {
    render() {
        // const client = Cookies.get("email")

        // function handleLogout() {
        //     Cookies.remove("email")
        // }
        return (
            <div className='navbar-wrapper'>
                <div className="navbar-top-left">
                    {/* <div className="name-wrapper">
                        Signed in as {client ? client : "guest"}
                    </div>  */}

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>  
                    </div>
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/owner">
                            Search for Business Owners
                        </Link>
                    </div>
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/signup-as-owner">
                            Become a Business Owner
                        </Link>
                    </div>

                </div>
                    


                <div className="navbar-top-right">
                    
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/login">
                            LOG IN
                        </Link>
                    </div>

                </div>
            </div>
        )
}
}