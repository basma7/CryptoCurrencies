import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import CryptoComponent from './Components/CryptoComponent';
import ArticlesComponent from './Components/ArticlesComponent';
import NewCryptoComponent from './Components/NewCryptoComponent';
import UserCryptoComponent from './Components/UserCryptoComponent';
import NewUserCryptoComponent from './Components/NewUserCryptoComponent';
import DeleteCryptoComponent from './Components/DeleteCryptoComponent';
import UserComponent from './Components/UserComponent';
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

var jwtDecode = require('jwt-decode');

class App extends Component {
  constructor(props) {
    super();
    this.isLogin = this.isLogin.bind(this)
    this.isAdmin = this.isAdmin.bind(this)
    this.state = {
        isLogin: false,
        isAdmin: false
    }
}
async componentDidMount() {
  this.setState({isLogin: localStorage.getItem("isLogin")});
  if (localStorage.getItem("JWT")) {
    var decoded = jwtDecode(localStorage.getItem("JWT"));
    if (decoded.result.admin == 1) {
      this.setState({isAdmin: true});
    }
  }
}

isLogin(isLogin) {
  this.setState({isLogin})
}

isAdmin(isAdmin) {
  this.setState({isAdmin})
}
disconnect() {
  localStorage.setItem('isLogin', false);
  localStorage.setItem('isAdmin', false);
  this.isAdmin(false);
  this.isLogin(false);
}

isAdmincallback = (isAdmin) => {
  this.setState({isAdmin});
}
  render() {
    return (
      <div className="App">
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Crypto-Currencies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              { this.state.isLogin ? 
              <div className="content">
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/user">User</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/cryptosUser">Users Cryptos</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/cryptos">Cryptos</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/cryptoUserCreate">Add your Own Crypto</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/articles">Articles</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand nav-right" to="/login" onClick={() => this.disconnect()}>Disconnect</Link>
              </div>
              :
              <div className="content">
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/login">Login</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/register">Register</Link>
              </div>
              }
              { this.state.isAdmin ?
                <div className="content">
                  <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/cryptoCreate">Create Crypto</Link>
                  <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/delete-crypto">delete Crypto</Link>
                </div>
              : null
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/login" component={() => <LoginComponent isAdmin={this.isAdmincallback}/> }  />
          <Route path="/register" component={RegisterComponent}  />
          <Route path="/cryptosUser" component={UserCryptoComponent}  />
          <Route path="/cryptos" component={CryptoComponent}  />
          <Route path="/articles" component={ArticlesComponent}  />
          <Route path="/cryptoCreate" component={NewCryptoComponent}  />
          <Route path="/cryptoUserCreate" component={NewUserCryptoComponent}  />
          <Route path="/user" component={UserComponent}  />
          <Route path="/delete-crypto" component={DeleteCryptoComponent}  />
          {/* <Route path="/cryptoUserCreate" component={NewCryptoUserComponent}  /> */}
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
