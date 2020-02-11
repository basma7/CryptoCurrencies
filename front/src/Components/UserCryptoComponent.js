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


export default class UserCryptoComponent extends Component {
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
        tmpObj["price"] = parseFloat(currency.EUR.PRICE).toFixed(2);
        tmpObj["volumeday"] = parseFloat(currency.EUR.VOLUMEDAY).toFixed(2);
        tmpObj["volume24h"] = parseFloat(currency.EUR.VOLUME24HOUR).toFixed(2);
        tmpObj["lowday"] = parseFloat(currency.EUR.LOWDAY).toFixed(2);
        tmpObj["highday"] = parseFloat(currency.EUR.HIGHDAY).toFixed(2);
        tmpObj["supply"] = parseFloat(currency.EUR.SUPPLY).toFixed(2);
        tmpObj["marketcap"] = parseFloat(currency.EUR.MKTCAP).toFixed(2);
        tmpObj["totalvolume24h"] = parseFloat(currency.EUR.TOTALVOLUME24H).toFixed(2);
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
      <Container fluid={true}>
        <h2 className="crypto-title">List Your Currencies</h2>
        <Row>
          <Col xs={0} md={0}></Col>
          <Col xs={12} md={12}>
            <BootstrapTable keyField='id' data={ this.state.list } columns={ this.state.columns }
              striped={true} hover={true}/>
          </Col>
          <Col xs={0} md={0}></Col>
        </Row>
      </Container>
    );
  }
}