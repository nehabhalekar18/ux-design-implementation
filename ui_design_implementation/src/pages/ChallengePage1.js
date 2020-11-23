import React, { Component, Fragment } from "react";
import {
  Card,
  Col,
  Container,
  InputGroup,
  Row,
  FormControl,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom"
import Header from "../components/Header";
import "./LandingPage.css";
import { lifePathNumber } from "../jsFiles/challenge1.js";

class ChallengePage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifePathNumber: null,
      dateInput: null,
    };
    this.lifePathNumber = this.lifePathNumber.bind(this);
    this.getDate = this.getDate.bind(this);
  }
  getDate = (e) => {
    this.setState({ dateInput: e.target.value });
  };
  lifePathNumber = () => {
    let pathNumber = lifePathNumber(this.state.dateInput);
    this.setState({ lifePathNumber: pathNumber });
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Container style={{ padding: "2% 0" }}>
          <Row>
            <Col xs={10}>
              <h3>Challenge 1</h3>
              <h5>
                Write the function lifePathNumber(dateOfBirth) that accepts a
                date of birth in the following format : "yyyy-mm-dd"
              </h5>
            </Col>
            <Col xs={2}>
              <Link to='/challenges'>
              <Button> Back</Button>
              </Link>
            </Col>
          </Row>
            <hr></hr>
          <Row>
            <Col xs={3}>
              <label>Select date of birth</label>
              <br></br>
              <InputGroup>
                <FormControl type="date" id="dob" onChange={this.getDate} />
              </InputGroup>
              <br></br>
              <Button onClick={this.lifePathNumber}>
                Calculate PathNumber
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={3}>
              <h6>Life Path Number is :: {this.state.lifePathNumber}</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage1;
