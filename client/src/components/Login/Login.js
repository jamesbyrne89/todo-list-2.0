import React, { Component } from 'react';
import { Button, NavBar, Input } from 'react-materialize';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }
  render() {
    return (
      <div className="app-container">
        {/* <NavBar title="Todo List" /> */}
        <Input s={6} className="signin-input" autoFocus />
        <Input s={6} className="signin-input" autoFocus />
      </div>
    );
  }
}

export default Login;
