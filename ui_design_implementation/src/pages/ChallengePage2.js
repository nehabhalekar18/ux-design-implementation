import React, { Component, Fragment } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import {Link} from "react-router-dom"
import Header from "../components/Header";
import { squareSum } from "../jsFiles/challenge2.js";
import "./LandingPage.css";

class ChallengePage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareSum: null,
      dataInput: null,
    };
    this.squareSum = this.squareSum.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData = (e) => {
    this.setState({ dataInput: e.target.value });
  };
  squareSum = () => {
    let result = squareSum(this.state.dataInput);
    this.setState({ squareSum: result });
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Container style={{ padding: "2% 0" }}>
          <Row>
            <Col xs={10}>
              <h3>Challenge 2</h3>
              <h5>
                Complete the square sum function so that it squares each number
                passed into it and then sums the results together.
              </h5>
            </Col><Col xs={2}>
              <Link to='/challenges'>
              <Button> Back</Button>
              </Link>
            </Col>
          </Row>
            <hr></hr>
          <Row>
            <Col xs={3}>
              <label>Enter number</label>
              <br></br>
              <InputGroup>
                <FormControl type="number" id="data" onChange={this.getData} />
              </InputGroup>
              <br></br>
              <Button onClick={this.squareSum}>Calculate Square Sum</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={3}>
              <h6>Square sum is :: {this.state.squareSum}</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage2;
