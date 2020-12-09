import React, { Component } from 'react';

import BaseLogin from "./login-pages/base-login"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BaseLogin />
      </div>
    );
  }
}
