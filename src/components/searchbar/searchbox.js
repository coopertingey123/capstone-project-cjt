import React, { Component } from 'react'

export default class SearchBox extends Component {
    constructor() {
        super()

        this.state = {
            search: ""
        }
    }

    handleChange(event) {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <div className='clients-list-container'>
                <input
                    type="search"
                    className="search"
                    placeholder="hello"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.search}
                />
            </div>
        )
    }
}