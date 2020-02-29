import React, { Component } from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

export default class RegisterComponent extends Component {
  constructor(props) {
    super();
    this.onRegister = this.onRegister.bind(this)
    this.state = {
      register: {
        nickname: "",
        email: "",
        password: ""
      } 
    }
}
saveSuccess(data) {
  if (data.success == 1) {
      window.location = "/login"
  }
}
  onRegister(event) {
    event.preventDefault()
    this.state.register.nickname = event.target.nickname.value
    this.state.register.email = event.target.email.value
    this.state.register.password = event.target.password.value
    let user = {
      email: this.state.register.email,
      password: this.state.register.password
    };
    if (this.state.register.nickname != "") {
      user = {
        nickname: this.state.register.nickname,
		  	email: this.state.register.email,
		  	password: this.state.register.password
      };
    }
		console.log(user);
		fetch('http://localhost:3000/api/users/register', {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
			},
		    body: JSON.stringify(user)
		}).then(res => res.json())
		.then(data => this.saveSuccess(data));
  }
  render() 
  {
    return (
        <Container className="login-container">
          <Row>
            <Col xs={0} md={2} xl={4}></Col>
            <Col xs={12} md={8} xl={4}>
              <h1 className="register-title">Register</h1>
              <Form onSubmit={this.onRegister}>

                  <Form.Group controlId="nickname">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control placeholder="Enter Nickname" />
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
            </Col>
            <Col xs={0} md={2} xl={4}></Col>
          </Row>
      </Container>
    );
  }
}
