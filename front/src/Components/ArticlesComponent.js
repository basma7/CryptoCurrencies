import React, { Component } from 'react';
import './Articles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class ArticlesComponent extends Component {
  constructor(props) {
    super();
    this.onArticles = this.onArticles.bind(this)
    this.state = {
        article: []
    };
    fetch('http://localhost:3000/api/users/articles', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      },
    }).then(res => res.json())
    .then(data => {
      this.setState({article: data});
    });
  }

  render() 
  {
    var items = this.state.article;
    var listItems = items.map(function(d, idx){
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="{d.imageurl}" />
          <Card.Body>
            <Card.Title>{d.categories}</Card.Title>
            <Card.Text className="cardText">
              {d.body}
            </Card.Text>
            <a href="{d.url}"<Button variant="primary">More infos</Button>
          </Card.Body>
        </Card>
      )
    });
    return (
      <Container className="article-container">
      <div class="container"
          {listItems}
      </Container>
    );
  }
}
