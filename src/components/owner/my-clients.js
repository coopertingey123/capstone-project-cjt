import React, { Component } from 'react'
import Cookies from 'js-cookie'

import Navbar from "../navigation/loggedIn"
import Footer from "../navigation/footer"



export default class MyClients extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            owner: Cookies.get("email"),
            search: ""
        }
       
    }

    handleChange(event) {
        this.setState({search: event.target.value})
    }

    componentDidMount() {
        this.setState({
            owner: Cookies.get("email")
        })
        fetch(`http://127.0.0.1:5000/client/get/my-clients/${this.state.owner}`, {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }



    render() {
        let filteredClients = this.state.data.filter(
            (client) => {
                return client.day_of_week.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            
            <div className='clients-wrapper'>
                <Navbar/>
                <div className='clients-list-container'>
                    <input
                        type="search"
                        className="search"
                        placeholder="Filter clients by day of the week..."
                        onChange={this.handleChange.bind(this)}
                        value={this.state.search}
                        
                    />
                </div>
                <div className='one-client-wrapper'>
                    {filteredClients.map(client => 
                        <div className="client-wrapper">
                            <div className="client-name">
                                {client.first_name} {client.last_name}
                            </div>
                            <div className="client-info">
                                Phone number: {client.phone_number} <br/><br/>
                                Email: {client.email}<br/><br/>
                                Address: {client.address}<br/><br/>
                                Day of the week: {client.day_of_week}<br/><br/>
                                Additional Info: {client.info_for_owner}<br/>
                            </div>
                            
                        </div>
                    )}               
                </div>

                <Footer/>
            </div>
        )
    }
}


