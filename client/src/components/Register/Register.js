import React, { Component } from 'react';
import { Button, Input, Card } from 'react-materialize';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInput = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    console.log({ email, password });
    if (password === confirmPassword) {
      axios
        .post('/auth/register', { firstName, lastName, email, password })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
  };

  render() {
    return (
      <Card className="login-container">
        <Input
          s={6}
          name="firstName"
          label="First Name"
          className="signin-input"
          onChange={this.handleInput}
          autoFocus
        />
        <Input
          s={6}
          name="lastName"
          label="Last name"
          className="signin-input"
          onChange={this.handleInput}
        />
        <Input
          s={6}
          name="email"
          label="Email"
          className="signin-input"
          onChange={this.handleInput}
        />
        <Input
          s={6}
          name="password"
          label="Password"
          className="signin-input"
          type="password"
          onChange={this.handleInput}
        />
        <Input
          s={6}
          name="confirmPassword"
          label="Repeat password"
          className="signin-input"
          type="password"
          onChange={this.handleInput}
        />
        <Button className="login-btn" onClick={this.handleSubmit}>
          Log in
        </Button>
      </Card>
    );
  }
}

export default Register;
