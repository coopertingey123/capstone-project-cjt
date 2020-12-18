import React, { Component } from 'react'

import Navbar from "../navigation/loggedIn"
import Cookies from "js-cookie"

export default class AddClient extends Component {
    constructor() {
        super ()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phoneNumber: "",
            dayOfWeek: "",
            checked: false,
            infoForOwner: "",
            ownerEmail: "",
            emailError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            ownerEmail: Cookies.get("email")
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckboxChange = () => 
        this.setState({ checked: true })

    handleSubmit(event) {
        event.preventDefault()

        if (this.state.checked) {
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
                    info_for_owner: this.state.infoForOwner,
                    owner_email: this.state.ownerEmail
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data == "Client added successfully") {
                    this.props.history.push("/get-started")
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
            
            <div className="body-wrapper">

                <Navbar/>
                <div className="form-wrapper">
                    <div className="text">
                        <h1>Add client</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>

                        <div className="wrapper">
                            Owner's Email:
                            <div className="owners-email">
                                {this.state.ownerEmail}
                            </div>                              
                            
                        </div>

                        <div className="wrapper">
                            First name:
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder="First name"
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
                                value={this.state.dayOfWeek}
                                onChange={this.handleChange}
                                placeholder="Day of the week"
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

                        <div className="wrapper">
                            Do you agree to payments through PayPal, a free way to make payments?
                            <input 
                                type="checkbox"
                                name="checked"
                                placeholder="Yes"
                                value={this.state.checked}
                                onChange={this.handleCheckboxChange}
                                />
                        </div>
                        
                        
                        <div className="wrapper">
                            <div className="text">
                                Requests, warnings, dogs, gate key, etc.
                            </div>
                            <textarea
                                name="infoForOwner"
                                placeholder="Needed info for business owner"
                                value={this.state.infoForOwner}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="button">
                            <button type="submit">
                                Sign up
                            </button>
                        </div>
                        
                    </form>

                    

                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    
                </div>
            </div>
        )
    }
}