import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    topic: "",
    startYear: "",
    endYear: "",
    isEmpty: false
  };

  componentDidMount() {
    //this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.topic,
    //     author: this.state.startYear,
    //     synopsis: this.state.s
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
    if(this.state.topic !== "" && this.state.endYear !== "" && this.state.endYear !== ""){
      window.location.href = `/results/${this.state.topic}/${this.state.startYear}/${this.state.endYear}`;
    }
    else{
      this.setState({isEmpty: true});
    }


  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Articles</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year"
              />
              <FormBtn
                // disabled={!(this.state.topic && this.state.startYear)}
                onClick={this.handleFormSubmit}
              >
                <strong>
                    Search Articles
                </strong>
              </FormBtn>
              
            </form>
            {this.state.isEmpty? (
              <strong style={{color: "red"}}>Dont Leave Empty Inputs</strong>
            ):("")}
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
