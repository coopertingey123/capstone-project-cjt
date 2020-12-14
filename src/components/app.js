import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import BaseLogin from "./auth/login"
import Signup from "./auth/signup"
import Navbar from "./navbar"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="wrapper">
            <Navbar />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={BaseLogin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
