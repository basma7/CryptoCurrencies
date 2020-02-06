import React, { Component } from 'react';
import './Articles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';

export default class NewArticleComponent extends Component {
  constructor(props) {
    super();
    this.onNewArticle = this.onNewArticle.bind(this)
    this.state = {
        article: {
            email: "",
            password: "",
          }
    }
}
    onNewArticle(event) {
        event.preventDefault()
        this.state.article.email = event.target.email.value
        this.state.article.password = event.target.password.value
        console.log(this.state.article)
  }

  render() 
  {
    return (
        <Container>
          <h1 className="article-title">NewArticle</h1>
          <Form onSubmit={this.onNewArticle}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Enter Article Title" />
              </Form.Group>
              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter Article Content" />
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
              <Form.Control type="file" placeholder="Add an Image to the Article" />
              </Form.Group>
              <Button variant="dark" type="submit">
                Add a New Article
              </Button>
          </Form>
      </Container>
    );
  }
}
