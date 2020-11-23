import React, { Component, Fragment } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { replaceDigits } from "../jsFiles/challenge5.js";
import "./LandingPage.css";

class ChallengePage5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null,
      dataInput: null,
    };
    this.replaceDigits = this.replaceDigits.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData = (e) => {
    this.setState({ dataInput: e.target.value });
  };
  replaceDigits = () => {
    let result = replaceDigits(this.state.dataInput);
    this.setState({ resultData: result });
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Container style={{ padding: "2% 0" }}>
          <Row>
            <Col xs={10}>
              <h3>Challenge 5</h3>
              <h5>
                Given a string of digits, you should replace any digit below 5
                with '0' and any digit 5 and above with '1'. Return the
                resulting string.
              </h5>
            </Col>
            <Col xs={2}>
              <Link to="/challenges">
                <Button> Back</Button>
              </Link>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col xs={3}>
              <label>Enter numbers</label>
              <br></br>
              <InputGroup>
                <FormControl type="number" id="data" onChange={this.getData} />
              </InputGroup>
              <br></br>
              <Button onClick={this.replaceDigits}>Replace Digits</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={3}>
              <h6>
                Number after replacing digits is ::{" "}
                {this.state.resultData}
              </h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage5;
