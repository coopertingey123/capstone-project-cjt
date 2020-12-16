import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./public/home"
import BaseLogin from "./auth/login"
import Navbar from "./public/navbar"
import AddClient from "./owner/add-client"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={BaseLogin} />
              <Route path="/add-client" component={AddClient} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
