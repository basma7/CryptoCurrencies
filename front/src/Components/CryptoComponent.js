import React, { Component } from 'react';
import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

export default class CryptoComponent extends Component {
  constructor(props) {
    super();
    this.onCrypto = this.onCrypto.bind(this)
    this.state = {
        crypto: {
            email: "",
            password: "",
          }
    }
}
    onCrypto(event) {
        event.preventDefault()
        this.state.crypto.email = event.target.email.value
        this.state.crypto.password = event.target.password.value
        console.log(this.state.crypto)
  }

  render() 
  {
    return (
      <div className="crypto-container">
        <div className="flex-column">
          <div className="flex-row">
            <Row className="crypto-content"> <h3>#</h3> </Row>
            <Row className="crypto-content"> <h3>Name</h3> </Row>
            <Row className="crypto-content"> <h3>Symbol</h3> </Row>
            <Row className="crypto-content"> <h3>Market Cap</h3> </Row>
            <Row className="crypto-content"> <h3>Price</h3> </Row>
            <Row className="crypto-content"> <h3>Circulating Supply</h3> </Row>
            <Row className="crypto-content"> <h3>Volume (24h)</h3> </Row>
            <Row className="crypto-content"> <h3>% 1h</h3> </Row>
            <Row className="crypto-content"> <h3>% 24h</h3> </Row>
            <Row className="crypto-content"> <h3>% 7d</h3> </Row>
          </div>
        <div className="limit"></div>
        </div>
      </div>
    );
  }
}
