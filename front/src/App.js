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
import NewCryptoUserComponent from './Components/NewCryptoUserComponent';
import DeleteUserComponent from './Components/DeleteUserComponent';
import DeleteCryptoComponent from './Components/DeleteCryptoComponent';
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
  this.setState({isAdmin: localStorage.getItem("isAdmin")});
}

isLogin(isLogin) {
  this.setState({isLogin})
}

isAdmin(isAdmin) {
  this.setState({isAdmin})
}
disconnect() {
  localStorage.removeItem('isLogin');
  localStorage.removeItem('isAdmin');
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
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/user/cryptos">Users Cryptos</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/cryptos">Cryptos</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/user/crypto/create">Create User Crypto</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/articles">Articles</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand nav-right" to="/login" onClick={this.disconnect}>Disconnect</Link>
              </div>
              :
              <div className="content">
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/login">Login</Link>
                <Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/register">Register</Link>
              </div>
              }
              { this.state.isAdmin ?
                <div className="content"><Link className="navbar-dark navbar-nav nav-link navbar-expand text-center" to="/crypto/create">Create Crypto</Link></div>
              : null
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/user" component={UserComponent}  />
          <Route path="/login" component={() => <LoginComponent /> }  />
          <Route path="/register" component={RegisterComponent}  />
          <Route path="/user/cryptos" component={UserCryptoComponent}  />
          <Route path="/cryptos" component={CryptoComponent}  />
          <Route path="/articles" component={ArticlesComponent}  />
          <Route path="/crypto/create" component={NewCryptoComponent}  />
          <Route path="/user/crypto/create" component={NewCryptoUserComponent}  />
          <Route path="/delete/cryptos" component={DeleteCryptoComponent}  />
          <Route path="/delete/users" component={DeleteUserComponent}  />
        </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
