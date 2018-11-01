import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { List, ListItem } from "../../components/List";

class Results extends Component {
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
    API.searchArticles({
      q: this.props.match.params.topic,
      begin_date: this.props.match.params.startY+"0101",
      end_date: this.props.match.params.endY+"1231"
    })
      .then(res => {
        console.log(res.data.response.docs);
        res.data.response.docs.splice(5);
        this.setState({articles : res.data.response.docs});
      })
      .catch(err => console.log(err));
  }
  handleSaveClick = (id) =>{
    const index = this.state.articles.findIndex(element => {
      return element._id === id;
    })
    const articleData = {
      title : this.state.articles[index].headline.main,
      url: this.state.articles[index].web_url,
      date: this.state.articles[index].pub_date
    }
    
    
    API.saveArticle(articleData)
    .then(res2 => {
      console.log("yay");
    })
    .catch(err => console.log(err));
        
        
    
  }
  
  // findArticle = (id) =>{
  //   API.getArticle(id)
  //     .then(res => {
        
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Results From Search
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
                      {article.headline.main}
                    </strong>
                  <SaveBtn onClick={() => this.handleSaveClick(article._id)} />
                </ListItem>
              ))}
            </List>)
            :(<h3>No Results to Display</h3>)}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/">← Back to Search</Link>
            <div style={{float:"right"}}>
              <Link to="/saved">View Saved Articles &#8594;</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
