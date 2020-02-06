import React, { Component } from 'react';
import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

export default class NewCryptoComponent extends Component {
  constructor(props) {
    super();
    this.onNewCrypto = this.onNewCrypto.bind(this)
    this.state = {
        crypto: {
            email: "",
            password: "",
          }
    }
}
    onNewCrypto(event) {
        event.preventDefault()
        this.state.crypto.email = event.target.email.value
        this.state.crypto.password = event.target.password.value
        console.log(this.state.crypto)
  }

  render() 
  {
    return (
        <Container>
            <h1 className="crypto-title">Add Crypto-Currencies</h1>
            <Form onSubmit={this.oncrypto}>
              <Row>
                <Col>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Crypto Name" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="symbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control placeholder="Enter Crypto Symbol" />
              </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col>
              <Form.Group controlId="market-cap">
                <Form.Label>Market Cap</Form.Label>
                <Form.Control placeholder="Enter Crypto Market Cap" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="Enter Crypto Price" />
              </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col>
              <Form.Group controlId="circulating-supply">
                <Form.Label>Circulating Supply</Form.Label>
                <Form.Control placeholder="Enter Crypto Circulating Supply" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="volume">
                <Form.Label>Volume (24h)</Form.Label>
                <Form.Control placeholder="Enter Crypto Volume (24h)" />
              </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col>
              <Form.Group controlId="1h">
                <Form.Label>% 1h</Form.Label>
                <Form.Control placeholder="Enter Crypto 1 1h" />
              </Form.Group>
              </Col>
              
              <Col>
              <Form.Group controlId="24h">
                <Form.Label>% 24h</Form.Label>
                <Form.Control placeholder="Enter Crypto % 24h" />
              </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col xs={6}>
              <Form.Group controlId="7d">
                <Form.Label>% 7d</Form.Label>
                <Form.Control placeholder="Enter Crypto %7d" />
              </Form.Group>
              </Col>
              <Button variant="dark" type="submit" className="btn-newcrypto">
              Add New Crypto
              </Button>
              </Row>
            </Form>
      </Container>
    );
  }
}
