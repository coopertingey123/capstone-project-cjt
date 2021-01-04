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
            search: "",
            category: "Day of Week",
            email: "",
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        // this.uncheckAll = this.uncheckAll.bind(this)
    }

    

    handleChange(event) {
        this.setState({search: event.target.value})
    }

    handleCategory(event) {
        this.setState({
            category: event.target.value
        })
    }


    handleDelete(email) {
        const shouldDelete = confirm('Do you really want to delete this client?');
        if (shouldDelete) {
            fetch(`http://127.0.0.1:5000/client/delete/${email}`, { method: "DELETE" })
            .then(response => response.json())
            .then(data=> {
                console.log(data)
            })
            .catch(error => console.log(error))
        }
    }

    handleCheckboxChange = () => 
        this.setState({ checked: true })

    
    componentDidMount() {
        this.setState({
            owner: Cookies.get("email")
        })
        fetch(`https://capstone-backend-cjt.herokuapp.com/client/get/my-clients/${this.state.owner}`, {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }

    componentDidUpdate() {
        fetch(`https://capstone-backend-cjt.herokuapp.com/client/get/my-clients/${this.state.owner}`, {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
    }

    // uncheckAll(checked = true) {
    //     const items = document.querySelectorAll('input[name="checkbox"]')
    //     items.forEach((cb) => {
    //         cb.checked = checked
    //     })
        
    
    // }

    
    render() {
        let filteredClients = this.state.data.filter(
            (client) => {
                if (this.state.category == "Day of Week") return client.day_of_week.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                if (this.state.category == "Name") return client.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                if (this.state.category == "Phone Number") return client.phone_number.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                if (this.state.category == "Email") return client.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                if (this.state.category == "") return client.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )
        
        
        return (
            
            <div className='clients-wrapper'>
                <Navbar/>
                <div className='clients-list-container'>
                    <div className="name">
                        <select
                            type="text"
                            value={this.state.category}
                            onChange={this.handleCategory}
                        >
                            <option value={""}>None</option>
                            <option value={"Day of Week"}>Day of week</option>
                            <option value={"Name"}>Name</option>
                            <option value={"Phone Number"}>Phone Number</option>
                            <option value={"Email"}>Email</option>
                        </select>
                    </div>
                    <input
                        type="search"
                        className="search"
                        placeholder="Search for clients..."
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
                            <div className="buttons-wrapper">
                                
                                <div className="checkbox-wrapper">
                                    Check if done
                                    <div className="checkbox">
                                        <input 
                                            type="checkbox"
                                            name="checkbox"
                                            id="check"
                                            value={this.state.checked}
                                            onChange={this.handleCheckboxChange}
                                        />
                                    </div>
                                </div>
                                <button onClick={() => this.handleDelete(client.email)}>Delete Client</button>
                                
                            </div>
                        </div>
                    )}
                    {/* <button onClick={() => this.uncheckAll}>Uncheck all boxes</button>                    */}
                </div>

                <Footer/>
            </div>
        )
    }
}


