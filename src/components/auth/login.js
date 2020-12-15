import React, { Component } from 'react'
import Cookies from "js-cookie"


export default class Login extends Component {
    constructor() {
        super()

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
        fetch("http://127.0.0.1:5000/client/authentication", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "Successful Login") {
                Cookies.set("email", this.state.email)
                this.props.history.push("/home")
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
                    <h1>Garbage Girls</h1>
                    <h2>Login to access your account</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                        <input 
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                        <button type="submit">Login</button>
                    </form>
                    <div className="signup-wrapper">
                        <a href="/signup">Don't have an account? Register here!</a>
                    </div>
                    {this.state.loginFailed ? <p>Invalid Credentials...</p> : null}
                    {this.state.loginError ? <p>Error Logging in.. Please try again later</p> : null}
                </div>
            </div>
        )
    }
}

