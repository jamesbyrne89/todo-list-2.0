import React, { Component } from 'react';

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
    return <div />;
  }
}

export default Login;
