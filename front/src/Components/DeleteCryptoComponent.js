import React, { Component } from 'react';
import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

let moneyEquiv = {
  "BTC": "Bitcoin",
  "XLM": "Stellar"
}

export default class DeleteCryptoComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      list: [],
      columns: [
        {
          dataField: 'symbol',
          text: 'Currency Symbol',
          sort: true
        },
        {
          dataField: 'name',
          text: 'Currency Name',
          sort: true
        },
        {
          dataField: 'price',
          text: 'Currency Unit value',
          sort: true
        },
        {
          dataField: 'volumeday',
          text: 'Volume Day',
          sort: true
        },
        {
          dataField: 'volume24h',
          text: 'Volume 24h',
          sort: true
        },
        {
          dataField: 'lowday',
          text: 'Low Day',
          sort: true
        },
        {
          dataField: 'highday',
          text: 'High Day',
          sort: true
        },
        {
          dataField: 'supply',
          text: 'Supply',
          sort: true
        },
        {
          dataField: 'marketcap',
          text: 'Market Cap',
          sort: true
        },
        {
          dataField: 'totalvolume24h',
          text: 'Total Volume 24h',
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
      for (let currency of Object.values(raw)) {
        let tmpObj = {};
        tmpObj["symbol"] = rawKeys[i];
        tmpObj["name"] = moneyEquiv[rawKeys[i]];
        tmpObj["price"] = currency.EUR.PRICE;
        tmpObj["volumeday"] = currency.EUR.PRICE;
        tmpObj["volume24h"] = currency.EUR.PRICE;
        tmpObj["lowday"] = currency.EUR.PRICE;
        tmpObj["highday"] = currency.EUR.PRICE;
        tmpObj["supply"] = currency.EUR.PRICE;
        tmpObj["marketcap"] = currency.EUR.PRICE;
        tmpObj["totalvolume24h"] = currency.EUR.PRICE;
        tmpObj["id"] = i++;
        console.log(tmpObj);
        this.setState(state => {
          const list = state.list.concat([tmpObj]);
          return {
            list
          };
        });
        console.log(this.state.list);
      }
    });
  }

  render() 
  {
    return (
      <Container>
        <h2 className="crypto-title">List currencies</h2>
        <Row>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            <BootstrapTable keyField='id' data={ this.state.list } columns={ this.state.columns }
              striped={true} hover={true}/>
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    );
  }
}