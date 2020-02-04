import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class LoginComponent extends Component {
  constructor(props) {
    super();
    // this.state.handlePlayPause = this.state.handlePlayPause.bind(this)
    this.state = {
    }
}
  
  render() 
  {
    return (
        <Container className="login-container">
            <h1 className="login-title">Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
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
