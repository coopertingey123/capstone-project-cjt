import React, { Component } from 'react'


import Footer from "../navigation/footer"
import Navbar from "../navigation/notLoggedIn"



export default class MyClients extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            search: ""
        }
       
    }

    handleChange(event) {
        this.setState({search: event.target.value})
    }

    componentDidMount() {
        fetch(`https://capstone-backend-cjt.herokuapp.com/owners/get`, {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }



    render() {
        let filteredClients = this.state.data.filter(
            (client) => {
                return client.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            
            <div className='clients-wrapper'>
                <Navbar/>
                <div className='clients-list-container'>
                    <input
                        type="search"
                        className="search"
                        placeholder="Search for a specific owner by name..."
                        onChange={this.handleChange.bind(this)}
                        value={this.state.search}
                        
                    />
                </div>
                <div className='one-client-wrapper'>
                    {filteredClients.map(owner => 
                        <div className="client-wrapper">
                            <div className="client-name">
                                {owner.first_name} {owner.last_name}
                            </div>
                            <div className="client-info">
                                Phone number: {owner.phone_number} <br/><br/>
                                Email: {owner.email}<br/><br/>
                            </div>
                            
                        </div>
                    )}               
                </div>
                <Footer/>
            </div>
        )
    }
}


