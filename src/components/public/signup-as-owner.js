import React, { Component } from 'react'
import Navbar from "../navigation/notLoggedIn"
import Footer from "../navigation/footer"

export default class OwnerSignup extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            emailError: false
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

        if (this.state.password === this.state.confirmPassword) {
            fetch("http://127.0.0.1:5000/business-owner/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    phone_number: this.state.phoneNumber,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data == "Owner added successfully") {
                    this.props.history.push("/login")
                }
                else if (data === "Owner already exists") {
                    this.setState({ emailError: true })
                }
                else {
                    this.setState({ error: true })
                }
            })
            .catch(error => {
                console.log("Error creating client: ", error)
                this.setState({ error: true })
            })
        }
    }

    render() {
        return (
            <div className='page-wrapper'>
                <Navbar/>
                <div className="form-wrapper">
                    <div className="text">
                        Business owners sign up and add their own clients.
                        Once signed up and logged in, you will have access to an "Add Clients" link,
                        where you will be able to add clients and start your business.
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign up here!</h1>
                        <div className="wrapper">
                            First name:
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="wrapper">
                            Last name:
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="wrapper">
                            Phone number:
                            <input
                                type="text"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                placeholder="Phone number"
                            />
                        </div>

                        <div className="wrapper">
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="wrapper">
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </div>

                        <div className="wrapper">
                            Confirm password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </div>

                        <div className="button">
                            <button type="submit">
                                Sign up
                            </button>
                        </div>

                    </form>
                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    {this.state.passwordError ? <p>Passwords do not match. Please try again</p> : null}
                    {this.state.usernameError ? <p>Email already exists. Please enter another</p> : null}
                    <Footer/>
                </div>
            </div>
        )
    }
}