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
import { calculateTime } from "../jsFiles/challenge4.js";
import "./LandingPage.css";

class ChallengePage4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null,
      dataInput: null,
    };
    this.calculateTime = this.calculateTime.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData = (e) => {
    this.setState({ dataInput: e.target.value });
  };
  calculateTime = () => {
    let result = calculateTime(this.state.dataInput);
    this.setState({ resultData: result });
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Container style={{ padding: "2% 0" }}>
          <Row>
            <Col xs={10}>
              <h3>Challenge 4</h3>
              <h5>
                Write a function that receives the speed (in cm/s) of a petal as
                input, and returns the time it takes for that petal to reach the
                ground from the same branch.
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
              <label>Enter speed</label>
              <br></br>
              <InputGroup>
                <FormControl type="text" id="data" onChange={this.getData} />
              </InputGroup>
              <br></br>
              <Button onClick={this.calculateTime}>Calculate Time</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={3}>
              <h6>Time taken for the petal to reach the ground :: {this.state.resultData}</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage4;
