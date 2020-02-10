import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

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
        const user = {
			email: this.state.login.email,
			password: this.state.login.password
		};
		console.log(user);
		fetch('https://localhost:3000/api/login', {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'text/plain'
			},
		    body: JSON.stringify(user)
		}).then(res => res.json())
		.then(data => console.log(data));
  }

  render() 
  {
    return (
        <Container className="login-container">
            <Row>
                <Col xs={0} md={2} xl={4}></Col>
                <Col xs={12} md={8} xl={4}>
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
                </Col>
                <Col xs={0} md={2} xl={4}></Col>
            </Row>
      </Container>
    );
  }
}
