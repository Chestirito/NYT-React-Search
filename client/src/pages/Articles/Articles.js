import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    topic: "",
    startYear: "",
    endYear: ""
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

    window.location.href = `/results/${this.state.topic}/${this.state.startYear}/${this.state.endYear}`;


  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search Article</h1>
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
                {/* <Link to={"/articles/" + articles._id}>
                  <strong>
                    Search Articles
                  </strong>
                </Link> */}
                <strong>
                    Search Articles
                </strong>
              </FormBtn>
              
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
