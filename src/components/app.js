import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./public/home"
import BaseLogin from "./auth/login"
import GetStarted from "./owner/get-started"
import AddClient from "./owner/add-client"
import OwnerSignup from "./public/signup-as-owner"
import MyClients from "./owner/my-clients"
import OwnerSearch from "./public/owner-search"


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
              <Route path="/my-clients" component={MyClients} />
              <Route path="/owner-search" component={OwnerSearch} />
              {/* <Route path="/search" component={SearchBox} /> */}
              {/* <Route path="/owner-search-page" component={OwnerSearchPage} />
              <Route path="/client-search-page" component={ClientSearchPage} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
