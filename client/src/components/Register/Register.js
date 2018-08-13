import React, { Component } from 'react';
import { Button, Input, Card } from 'react-materialize';
import NavBar from '../NavBar/NavBar';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="app-container">
        <NavBar title="Todo List" />
        <Card className="login-container">
          <Input
            s={6}
            name="firstName"
            label="First Name"
            className="signin-input"
            autoFocus
          />
          <Input
            s={6}
            name="lastName"
            label="Last name"
            className="signin-input"
          />
          <Input s={6} name="email" label="Email" className="signin-input" />
          <Input
            s={6}
            name="password"
            label="Password"
            className="signin-input"
          />
          <Input
            s={6}
            name="confirmPassword"
            label="Repeat password"
            className="signin-input"
          />
          <Button className="login-btn">Log in</Button>
        </Card>
      </div>
    );
  }
}

export default Register;
