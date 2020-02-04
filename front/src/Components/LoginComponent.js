import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class LoginComponent extends Component {
  constructor(props) {
    super();
    this.onLogin = this.onLogin.bind(this)
    this.state = {
        login: {
            email: "",
            password: "",
          }
    }
}
    onLogin(event) {
        event.preventDefault()
        this.state.login.email = event.target.email.value
        this.state.login.password = event.target.password.value
        console.log(this.state.login)
  }

  render() 
  {
    return (
        <Container className="login-container">
            <h1 className="login-title">Login</h1>
            <Form onSubmit={this.onLogin}>
                <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                Login
                </Button>
            </Form>
      </Container>
    );
  }
}
