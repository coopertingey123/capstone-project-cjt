import React, { Component } from 'react'

export default class Signup extends Component {
    constructor() {
        super ()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            phoneNumber: "",
            paymentMethod: "",
            requests: "",
            emailError: false,
            passwordError: false
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
            fetch("http://127.0.0.1:5000/user/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data == "Client added successfully") {
                    Cookies.set("email", this.state.email)
                    this.props.history.push("/home")
                }
                else if (data === "Client already exists") {
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
            <div>
                <div className='registration-wrapper'>
                    <button>Sign Up as a Customer</button>
                    <button>Sign Up as a Business Owner</button>
                </div>
                <div className="form-wrapper">
                    <form action="">
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
                        <input
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            placeholder="Confirm Password"
                        />
                        <input type="text" placeholder="Address"/>
                        <input type="text" placeholder="Phone number"/>
                        <input type="text" placeholder="Payment method"/> 
                        <textarea name="requests" id="" cols="30" rows="10" placeholder="Special Requests"></textarea>
                        <button type="submit">Sign up</button>
                    </form>
                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    {this.state.passwordError ? <p>Passwords do not match. Please try again</p> : null}
                    {this.state.usernameError ? <p>Username already exists. Please enter another</p> : null}
                </div>
            </div>
        )
    }
}