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
import "./exercisePage.css";

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
              <h3>Exercise 1</h3>
              <h5>A simple Form (Static) with help of html + css + js.</h5>
            </Col>
            <Col xs={2}>
              <Link to="/">
                <Button> Back</Button>
              </Link>
            </Col>
          </Row>
          <hr></hr>
          {/* Basic HTML */}
          <div class="form">
            <div class="row">
              <div class="col-xs-12">
                <h3>Basic Form</h3>
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-xs-2">
                <label><span class="form-validation">*</span>First Name</label>
              </div>
              <div class="col-xs-2">
                <input type="text" placeholder="" />
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-xs-2">
                <label><span class="form-validation">*</span>Last Name</label>
              </div>
              <div class="col-xs-2">
                <input type="text" placeholder="" />
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-xs-2">
                <label>Date of birth</label>
              </div>
              <div class="col-xs-2">
                <input type="date" placeholder="" />
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-xs-2">
                <label>E-mail</label>
              </div>
              <div class="col-xs-2">
                <input type="email" placeholder="" />
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col-xs-2">
                <button id="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
export default ChallengePage5;
