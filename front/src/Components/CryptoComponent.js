import React, { Component } from 'react';
import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


export default class CryptoComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      crypto: {
          email: "",
          password: "",
      },
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
      console.log("data  :" , data.data.Data);
      let i = 0;
      for (let currency of data.data.Data) {
        let tmpObj = {};
        tmpObj["symbol"] = currency.CoinInfo.Name;
        tmpObj["name"] = currency.CoinInfo.FullName;
        tmpObj["price"] = Math.random() * 10000;
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