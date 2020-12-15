import React, { Component } from 'react'

export default class AddClient extends Component {
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
            fetch("http://127.0.0.1:5000/client/add", {
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
            console.log("Client added successfully")
        }
    }

    render() {
        return (
            <div className="body-wrapper">
                <div className="form-wrapper">
                    <div className="text">
                        <h1>Add client</h1>
                    </div>
                    <form>
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
                                placeholder="Confirm Password"
                            />
                        </div>
                        
                        <div className="wrapper">
                            Address: 
                            <input
                                type="text"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                placeholder="Address"
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
                            Day of the week trash is taken out:
                            <select
                                type="text"
                                name="dayOfWeek"
                                // INSERT VALUE HERE ONCE CREATED IN THE DATABASE
                                // onChange={this.handleChange}
                                placeholder="day"
                            >
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thurday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                            </select>
                        </div>
                        
                        {/* <div className="payment-wrapper">
                            Payment method
                            Select one of the following:
                            <select
                                name="Payment Method"
                                value={this.state.paymentMethod}
                                type="text"
                            > 
                                <option value="venmo">Venmo</option>
                                <option value="applePay">ApplePay</option>
                                <option value="paypal">Paypal</option>
                                <option value="cash">Cash</option>
            
                            </select>
                            If venmo selected, please enter username:
                            <input
                                type="text"
                                name="venmo-username"
                                value={this.state.paymentMethod}
                                onChange={this.handleChange}
                                placeholder="Venmo username"
                            />
                        </div> */}
                        
                        <div className="wrapper">
                            <div className="text">
                                Requests, warnings, dogs, gate key, etc.
                            </div>
                            <textarea name="requests" placeholder="Needed info for business owner"></textarea>
                        </div>
                        
                        
                        
                    </form>

                    <div className="button">
                        <button type="submit">Sign up</button>
                    </div>

                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    {this.state.passwordError ? <p>Passwords do not match. Please try again</p> : null}
                    {this.state.usernameError ? <p>Username already exists. Please enter another</p> : null}
                </div>
            </div>
        )
    }
}