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
import { toggleCase } from "../jsFiles/challenge3.js";
import "./LandingPage.css";

class ChallengePage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: null,
      dataInput: null,
    };
    this.toggleCase = this.toggleCase.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData = (e) => {
    this.setState({ dataInput: e.target.value });
  };
  toggleCase = () => {
    let result = toggleCase(this.state.dataInput);
    this.setState({ resultData: result });
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Container style={{ padding: "2% 0" }}>
          <Row>
            <Col xs={10}>
              <h3>Challenge 3</h3>
              <h5>
               Given a string that may have mixed uppercase and lowercase letters, convert the string to either lowercase or uppercase based on:
              </h5><br></br>
              <ul>
                  <li>make minimum changes</li>
                  <li>if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase</li>
              </ul>
            </Col><Col xs={2}>
              <Link to='/challenges'>
              <Button> Back</Button>
              </Link>
            </Col>
          </Row>
            <hr></hr>
          <Row>
            <Col xs={3}>
              <label>Enter string</label>
              <br></br>
              <InputGroup>
                <FormControl type="text" id="data" onChange={this.getData} />
              </InputGroup>
              <br></br>
              <Button onClick={this.toggleCase}>Convert</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={3}>
              <h6>Output :: {this.state.resultData}</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage3;
