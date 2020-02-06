import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import CryptoComponent from './Components/CryptoComponent';
import ArticlesComponent from './Components/ArticlesComponent';
import NewCryptoComponent from './Components/NewCryptoComponent';
import NewArticleComponent from './Components/NewArticleComponent';
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
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/articles">Articles</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/create/crypto">Create Crypto</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/create/articles">Create Articles</Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/login" component={LoginComponent}  />
          <Route path="/register" component={RegisterComponent}  />
          <Route path="/crypto" component={CryptoComponent}  />
          <Route path="/articles" component={ArticlesComponent}  />
          <Route path="/create/crypto" component={NewCryptoComponent}  />
          <Route path="/create/articles" component={NewArticleComponent}  />
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
