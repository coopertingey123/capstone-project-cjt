import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Homepage from "./home-pages/home"
import BaseLogin from "./login-pages/base-login"
import Signup from "./login-pages/registration-page"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route path exact="/" component={Homepage} />
              <Route path="/login" component={BaseLogin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
