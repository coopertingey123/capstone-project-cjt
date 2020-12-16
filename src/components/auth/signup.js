import React, { Component } from 'react'

export default class Signup extends Component {
    constructor() {
        super ()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phoneNumber: "",
            dayOfWeek: "",
            paymentValidation: false,
            infoForOwner: "",
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

        if (this.state.paymentValidation === True) {
            fetch("http://127.0.0.1:5000/client/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.email,
                    address: this.state.address,
                    phone_number: this.state.phoneNumber,
                    day_of_week: this.state.dayOfWeek,
                    info_for_owner: this.state.infoForOwner
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data == "Client added successfully") {
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
            console.log("Client added successfully")
        }
    }

    render() {
        return (
            <div>
                <div className="form-wrapper">
                    <form>
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