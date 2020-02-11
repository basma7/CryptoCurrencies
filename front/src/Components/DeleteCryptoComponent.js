import React, { Component } from 'react';
import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

let moneyEquiv = {
  "BTC": "Bitcoin",
  "XLM": "Stellar",
  "ETH": "Ethereum",
  "XRP": "Ripple",
  "BCH": "Bitcoin Cash",
  "BSV": "Bitcoin SV",
  "EOS": "EOS",
  "LTC": "Litecoin",
  "USDT": "Thether",
  "BNB": "Binance Coin",
  "XZT": "Tezos"
}

export default class DeleteCryptoComponent extends Component {
  constructor(props) {
    super();
    this.deleteCurrency = this.deleteCurrency.bind(this);
    this.state = {
      list: [],
      columns: [
        {
          dataField: 'id',
          text: 'Currency ID',
          sort: true
        },
        {
          dataField: 'symbol',
          text: 'Currency Symbol',
          sort: true
        }
      ]
    };
    fetch('http://localhost:3000/api/users/cryptos/cmids', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      },
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      let raw = data.data.RAW;
      let display = data.DISPLAY;
      let rawKeys = Object.keys(raw);
      console.log("data  :" , data);
      let i = 0;
      let tmpList = [];
      for (let currency of Object.values(raw)) {
        let tmpObj = {};
        tmpObj["symbol"] = rawKeys[i];
        tmpObj["id"] = i++;
        console.log(tmpObj);
        tmpList.push(tmpObj);
      }
      console.log("tmpList : ", tmpList);
      this.state.list = tmpList;
      console.log(this.state.list);
    });
  }

  deleteCurrency(event) {
    event.preventDefault();
    let tmp = this.state.list;
    console.log("tmp : ", tmp);
    let cur = tmp[event.currentTarget.del.value].symbol;
    console.log(cur);
    fetch('http://localhost:3000/api/cryptos/delete', {
      method: 'POST',
      headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
      },
        body: JSON.stringify({CMID: cur})
      }).then(res => res.json())
      .then(data => this.saveSuccess(data));

  }

  render() 
  {
    return (
      <Container>
        <h2 className="crypto-title">Delete currencies</h2>
        <Row>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            <BootstrapTable keyField='id' data={ this.state.list } columns={ this.state.columns }
              striped={true} hover={true}/>
            <Form onSubmit={this.deleteCurrency}>
              <Form.Group controlId="del">
              <Form.Control type="text" placeholder="Currency ID" />
              </Form.Group>
              <Button variant="dark" type="submit">
                Supprimer
              </Button>
                    </Form>
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    );
  }
}