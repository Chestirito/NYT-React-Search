import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
  state = {
    articles: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getArticles(this.props.match.params.id)
    //   .then(res => this.setState({ article: res.data }))
    //   .catch(err => console.log(err));
    //console.log(this.props.match.params);
    this.loadArticles();
  }

  loadArticles = () =>{
    API.getArticles()
      .then(res => {
        //console.log(res.data);
        this.setState({ articles: res.data });
        //console.log()
      })
      .catch(err => console.log(err));
  }

  handleDeleteClick = (id) => {
    // let index = this.state.articles.findIndex(element => {
    //   return element.id === id;
    // })
    let articles = this.state.articles;
    API.deleteArticle(id)
      .then(res=>{
        // articles.splice(index, 1);
        // this.setState({articles: articles});
        this.loadArticles();
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Saved Articles
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                    <strong>
                      {article.title} 
                      <br/>Pub-Date: {article.date.substring(0, 10)}
                    </strong>
                  <DeleteBtn onClick={() => this.handleDeleteClick(article._id)} />
                </ListItem>
              ))}
            </List>)
            :(<h3>No Results to Display</h3>)}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
