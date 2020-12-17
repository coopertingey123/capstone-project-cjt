import React, { Component } from 'react'
import Cookies from "js-cookie"


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loginFailed: false,
            loginError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        Cookies.set("email", this.state.email)
        fetch("http://127.0.0.1:5000/owner/authentication", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        })
        .then(response => response.json())
            
        .then(data => {
            if (data.status === "logged_in") {
                Cookies.set("email", this.state.email)
                this.props.history.push("/get-started")
            }
            else {
                this.setState({ loginFailed: true })
            }
        })
        .catch(error => {
            console.log("Error logging in: ", error)
            this.setState({ loginError: true })
        })
    }

    render() {
        return (
            <div className="body">
                <div className='login-wrapper'>
                    <h1>Trash Time</h1>
                    <h2>Login to see your business information</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="whole-input-wrapper">
                            <div className="input-wrapper">
                                Email:
                                <input 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Your email"
                                />
                            </div>
                            
                            <div className="input-wrapper">
                                Password:                        
                                <input 
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Your password"
                                />
                            </div>
                        </div>
                        <button type="submit">Login</button>
                        <div className="signup-wrapper">
                            <a href="/signup-as-owner">Don't have an account? Register here!</a>
                        </div>
                    </form>
                    
                    {this.state.loginFailed ? <p>Invalid Credentials...</p> : null}
                    {this.state.loginError ? <p>Error Logging in.. Please try again later</p> : null}
                </div>
            </div>
        )
    }
}

