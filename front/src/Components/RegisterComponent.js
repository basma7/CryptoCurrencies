import React, { Component } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class RegisterComponent extends Component {
  constructor(props) {
    super();
    this.onRegister = this.onRegister.bind(this)
    this.state = {
      register: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      } 
    }
}
  onRegister(event) {
    event.preventDefault()
    this.state.register.firstname = event.target.firstname.value
    this.state.register.lastname = event.target.lastname.value
    this.state.register.email = event.target.email.value
    this.state.register.password = event.target.password.value
    console.log(this.state.register)
  }
  render() 
  {
    return (
        <Container className="login-container">
            <h1 className="register-title">Register</h1>
            <Form onSubmit={this.onRegister}>
                <Form.Group controlId="firstname">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control placeholder="Enter Firstname" />
                </Form.Group>

                <Form.Group controlId="lastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control placeholder="Enter Lastname" />
                </Form.Group>
              
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                Register
                </Button>
            </Form>
      </Container>
    );
  }
}
