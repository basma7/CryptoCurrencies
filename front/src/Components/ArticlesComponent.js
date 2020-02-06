import React, { Component } from 'react';
import './Articles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class ArticlesComponent extends Component {
  constructor(props) {
    super();
    this.onArticles = this.onArticles.bind(this)
    this.state = {
        article: {
            email: "",
            password: "",
          }
    }
}
    onArticles(event) {
        event.preventDefault()
        this.state.article.email = event.target.email.value
        this.state.article.password = event.target.password.value
        console.log(this.state.article)
  }

  render() 
  {
    return (
      <Container className="article-container">
          
      </Container>
    );
  }
}
