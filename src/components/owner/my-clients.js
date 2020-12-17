import React, { Component } from 'react'

import Navbar from "../navigation/loggedIn"

export default class MyClients extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/client/get/marshmallow", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='clients-wrapper'>
                <Navbar/>
                {this.state.data.map(client => 
                    <div className="client-wrapper">
                        <h2>{client.first_name} {client.last_name}</h2>
                        <h4>Phone number: {client.phone_number}</h4>
                        <h4>Email: {client.email}</h4>
                        <h4>Address: {client.address}</h4>
                        <h4>Day of the week Trash taken out: {client.day_of_week}</h4>
                        <h4>Additional Info: {client.info_for_owner}</h4>
                    </div>
                )}               
            </div>
        )
    }
}