import React, { Component } from 'react';
import { Button, Input, Card } from 'react-materialize';
import NavBar from '../NavBar/NavBar';

class Register extends Component {
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
        <NavBar title="Todo List" />
        <Card className="login-container">
          <Input s={6} label="First Name" className="signin-input" autoFocus />
          <Input s={6} label="Last name" className="signin-input" />
          <Input s={6} label="Email" className="signin-input" />
          <Input s={6} label="Password" className="signin-input" />
          <Button className="login-btn">Log in</Button>
        </Card>
      </div>
    );
  }
}

export default Register;
