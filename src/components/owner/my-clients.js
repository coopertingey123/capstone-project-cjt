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
                )}               
            </div>
        )
    }
}