import React, { Component } from 'react';
import '../App.css';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

var jwtDecode = require('jwt-decode');


export default class UserComponent extends Component {
  constructor(props) {
    super();
    this.onRegister = this.onRegister.bind(this)
    this.state = {
      register: {
        nickname: "",
        email: "",
        password: "",
      },
      user: {
        nickname: "",
        email: ""
      }
    }
}
saveUserData(data) {
  this.state.user.nickname = data.data.nickname;
  this.state.user.email = data.data.email;
  this.forceUpdate();
}

componentDidMount() {
  var decoded = jwtDecode(localStorage.getItem('JWT'));
  fetch('http://localhost:3000/api/users/profile/' + decoded.result.id, {
			method: 'GET',
			headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('JWT')
			},
		}).then(res => res.json())
		.then(data => this.saveUserData(data));
}



saveSuccess(data) {
  console.log(data);
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
		fetch('http://localhost:3000/api/users/profile', {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('JWT')
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
              <h1 className="title">User Profile</h1>
              <h3 className="margin">Nickname: {this.state.user.nickname}</h3>
              <h3 className="margin">Email: {this.state.user.email}</h3>
              <br/>
              <br/>
              <br/>
              <Form onSubmit={this.onRegister}>

                  <Form.Group controlId="nickname">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control placeholder="Enter Nickname" />
                  </Form.Group>
                
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
              
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                  Update Profile
                  </Button>
              </Form>
            </Col>
            <Col xs={0} md={2} xl={4}></Col>
          </Row>
      </Container>
    );
  }
}
