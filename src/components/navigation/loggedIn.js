import React, { Component } from 'react'

import { Link } from "react-router-dom"
import Cookies from "js-cookie"



export default class LoggedIn extends Component {
    constructor() {
        super()
        
        this.state = {
            owner: ""
        }      
    }
    
    componentDidMount() {
        this.setState({
            owner: Cookies.get("email")
        })
    }


    handleLogout() {
        Cookies.remove("email")
    }

    render() {
        
        return (
            <div className='navbar-wrapper'>
                <div className="navbar-top-left">
                    <div className="name-wrapper">
                        Signed in as {this.state.owner}
                    </div> 

                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/get-started">
                            Home
                        </Link>  
                    </div>
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/my-clients">
                            My Clients
                        </Link>
                    </div>
                    <div className="nav-link-wrapper">
                        <Link className="nav-link" to="/add-client">
                            Add client
                        </Link>
                    </div>
                </div>
                <div className="navbar-top-right">
                    <div className="nav-link-wrapper">
                        <button onClick={this.handleLogout}> Log Out </button>
                    </div>
                </div>
            </div>
        )
        }
    }
