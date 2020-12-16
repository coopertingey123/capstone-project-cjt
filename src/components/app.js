import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./public/home"
import BaseLogin from "./auth/login"
import GetStarted from "./owner/get-started"
import AddClient from "./owner/add-client"
import OwnerSignup from "./public/signup-as-owner"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup-as-owner" component={OwnerSignup} />
              <Route path="/login" component={BaseLogin} />
              <Route path="/get-started" component={GetStarted} />
              <Route path="/add-client" component={AddClient} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
