import React, { Component } from 'react';
import { Button, Input, Card } from 'react-materialize';
import axios from 'axios';

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

  handleSubmit = () => {
    const { email, password } = this.state.credentials;
    axios
      .post('/auth/login', { email, password })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  render() {
    return (
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
    );
  }
}

export default Register;
