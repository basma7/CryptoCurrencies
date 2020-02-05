import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          <Navbar.Brand href="/">Crypto-Currencies</Navbar.Brand>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/login">Login</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/register">Register</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/crypto">Crypto</Link>
          </Nav>
        </Navbar>
        <Switch>
          {/* <Route path="/login" component={LoginComponent}  /> */}
        </Switch>
      </Router>
      <Container className="login-register-container">
        <Row xs={6} className="login"> <LoginComponent/> </Row>
        <Row xs={6} className="register">  <RegisterComponent/> </Row>
      </Container>
      </div>
    );
  }
}

export default App;
