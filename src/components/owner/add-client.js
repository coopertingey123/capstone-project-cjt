import React, { Component } from 'react'

import Navbar from "../navigation/loggedIn"
import Cookies from "js-cookie"
import Footer from "../navigation/footer"

export default class AddClient extends Component {
    constructor() {
        super ()

        this.state = {
            firstName: "",
            firstNameError: false,
            lastName: "",
            lastNameError: false,
            email: "",
            address: "",
            addressError: false,
            phoneNumber: "",
            phoneNumberError: false,
            dayOfWeek: "",
            dayOfWeekError: false,
            checked: false,
            checkedError: false,
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

        if (this.state.checked && this.state.firstName !== "" && this.state.lastName !== "" && this.state.address !== "" && this.state.phoneNumber !== "" && this.state.dayOfWeek !== "" && this.state.email !== "") {
            fetch("https://capstone-backend-cjt.herokuapp.com/client/add", {
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
        else if (this.state.checked === false) {
            this.setState({ checkedError: true })
        }
        else if (this.state.firstName === "") {
            this.setState({ firstNameError: true })
        }
        else if (this.state.lastName === "") {
            this.setState({ lastNameError: true })
        }
        else if (this.state.address === "") {
            this.setState({ addressError: true })
        }
        else if (this.state.email === "") {
            this.setState({ emailError: true })
        }
        else if (this.state.phoneNumber === "") {
            this.setState({ phoneNumberError: true})
        }
        
        
    }
    
    render() {
        
        return (
            
            <div className="body-wrapper">
                
                <div className="form-wrapper">
                    <Navbar/>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Add client</h1>
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

                        <div className="checkbox-wrapper">
                            Do you agree to payments through PayPal, a free way to make payments?
                            <div className="checkbox">
                                {/* <label for="check">Yes</label> */}
                                <input 
                                    type="checkbox"
                                    name="checked"
                                    id="check"
                                    value={this.state.checked}
                                    onChange={this.handleCheckboxChange}
                                />
                                
                             </div>
                             
                        </div>
                        
                        
                        <div className="wrapper">
                            
                            Requests, warnings, dogs, gate key, etc.
                            
                            <textarea
                                name="infoForOwner"
                                placeholder="Needed info for business owner"
                                value={this.state.infoForOwner}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="add-client-button">
                            <button type="submit">
                                Add Client
                            </button>
                        </div>
                        
                    </form>
                    
                    {this.state.firstNameError ? <p>Error signing up: first name required</p> : null}
                    {this.state.lastNameError ? <p>Error signing up: last name required</p> : null}
                    {this.state.emailError ? <p>Error signing up: Email required/User already exists</p> : null}
                    {this.state.addressError ? <p>Error signing up: address required</p> : null}
                    {this.state.phoneNumberError ? <p>Error signing up: phone number required</p> : null}
                    {this.state.dayOfWeekError ? <p>Error signing up: Gargabe Truck day of the week required</p> : null}
                    {this.state.checkedError ? <p>Error signing up: Check client payment agreement</p> : null}

                    
                    <Footer/>                   
                </div>
                
            </div>
        )
    }
}