import React, { Component } from 'react'
import Cookies from 'js-cookie'

import Navbar from "../navigation/loggedIn"

export default class MyClients extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }

        this.filterData = this.filterData.bind(this)
        
    }
    ownerEmail = Cookies.set("email")

    componentDidMount() {
        fetch("http://127.0.0.1:5000/client/get/marshmallow", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }

    filterData() {
        if (this.state.data.owner_email === ownerEmail) {
            return (
                <div className="client-wrapper">
                    <div className="client-name">
                        {client.first_name} {client.last_name}
                    </div>
                    <div className="client-info">
                        Phone number: {client.phone_number} <br/>
                        Email: {client.email}<br/>
                        Address: {client.address}<br/>
                        Day of the week Trash taken out: {client.day_of_week}<br/>
                        Additional Info: {client.info_for_owner}<br/>
                    </div>    
                </div>
            )
        }

    }

    render() {
        return (
            <div className='clients-wrapper'>
                <Navbar/>
                {this.filterData}
                {/* {this.state.data.map(client => 
                    <div className="client-wrapper">
                        <div className="client-name">
                            {client.first_name} {client.last_name}
                        </div>
                        <div className="client-info">
                            Phone number: {client.phone_number} <br/>
                            Email: {client.email}<br/>
                            Address: {client.address}<br/>
                            Day of the week Trash taken out: {client.day_of_week}<br/>
                            Additional Info: {client.info_for_owner}<br/>
                        </div>
                        
                    </div>
                )}                */}
            </div>
        )
    }
}