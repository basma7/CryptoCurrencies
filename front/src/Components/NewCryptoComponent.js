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
            CMID: ""
          }
    }
}
  onNewCrypto(event) {
    event.preventDefault();
    this.setState({crypto: {CMID: event.target.name.value}});
    console.log(this.state.crypto)
    const user = {
      CMID: this.state.crypto.CMID,
    };
    console.log(user);
    fetch('https://localhost:3000/api/crypto', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      },
        body: JSON.stringify(crypto)
    }).then(res => res.json())
    .then(data => console.log(data));
  }

  render() 
  {
    return (
        <Container>
          <h2 className="crypto-title">Add Crypto-Currencies</h2>
          <Row>
            <Col xs={0} md={2} xl={4}></Col>
            <Col xs={12} md={8} xl={4}>
              <Form onSubmit={this.onNewCrypto}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter Crypto Name" />
                </Form.Group>
                <Button variant="dark" type="submit" className="btn-newcrypto" block>
                   Add New Crypto
                </Button>
              </Form>
            </Col>
            <Col xs={0} md={2} xl={4}></Col>
          </Row>
      </Container>
    );
  }
}
