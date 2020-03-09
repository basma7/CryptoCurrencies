import React, { Component } from 'react';
import './Articles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Card, Row, Col} from 'react-bootstrap';

export default class ArticlesComponent extends Component {
  constructor(props) {
    super();
    //this.onArticles = this.onArticles.bind(this);
    this.state = {
        article: []
    };
    fetch('http://localhost:3000/api/users/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('JWT')
      },
    }).then(res => res.json())
    .then(data => {
      this.setState({article: data});
    });
  }

  render() 
  {
    var items = this.state.article;
    console.log("items : ", items);
    if (items && items.data && items.data.Data) {
      var listItems = items.data.Data.map(function(d, idx){
        return (
          <Card key={idx} className="mb-5">
            <Card.Img variant="top" src={d.imageurl} />
            <Card.Body>
              <Card.Title>{d.categories}</Card.Title>
              <Card.Text className="cardText">
                {d.body}
              </Card.Text>
              <a href={d.url}><Button variant="primary">More infos</Button></a>
            </Card.Body>
          </Card>
        )
      });
    }
    return (
      <Container className="article-container">
        {listItems}
      </Container>
    );
  }
}
