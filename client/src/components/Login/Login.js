import React, { Component } from 'react';
import { Button, Input, Card } from 'react-materialize';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.emailRef = React.createRef();
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    console.log(name);
    this.setState({
      credentials: { ...this.state.credentials, [name]: value }
    });
  };

  componentDidMount() {
    this.emailRef.current.input.focus();
  }

  handleSubmit = () => {
    console.log(this.state.credentials);
  };

  render() {
    return (
      <div className="app-container">
        <Card className="login-container">
          <Input
            s={6}
            label="Email"
            name="email"
            type="email"
            className="signin-input"
            ref={this.emailRef}
            onChange={this.handleInput}
            autoFocus
          />
          <Input
            s={6}
            label="Password"
            name="password"
            type="password"
            className="signin-input"
            onChange={this.handleInput}
          />
          <footer className="card-footer">
            <Link to="/register">Don't have an account yet? Sign up here.</Link>
            <Button className="login-btn" onClick={this.handleSubmit}>
              Log in
            </Button>
          </footer>
        </Card>
      </div>
    );
  }
}

export default Login;
