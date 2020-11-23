import React, { Component } from "react";
import { Card, Col, Container, Row,Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import Header from "../components/Header";
import "./LandingPage.css";

class ChallengesPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ textAlign: "center", padding: "2% 0" }}>
          <Row>
            <Col xs={{span:2,offset:10}}>
              <Link to="/">
                <Button> Back</Button>
              </Link>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={4}>
                <Link to='/challenge1'>
              <Card>
                <Card.Body>
                  <Card.Title>Challenge 1</Card.Title>
                  <Card.Text>Calculate life path number</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col xs={4}>
            <Link to='/challenge2'>
              <Card>
                <Card.Body>
                  <Card.Title>Challenge 2</Card.Title>
                  <Card.Text>Calculate sum of numbers in array </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col xs={4}>
            <Link to='/challenge3'>
              <Card>
                <Card.Body>
                  <Card.Title>Challenge 3</Card.Title>
                  <Card.Text>Convert to lower or upper case</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col xs={4}>
            <Link to='/challenge4'>
              <Card>
                <Card.Body>
                  <Card.Title>Challenge 4</Card.Title>
                  <Card.Text>Calculate time taken for petal to fall</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col xs={4}>
            <Link to='/challenge5'>
              <Card>
                <Card.Body>
                  <Card.Title>Challenge 5</Card.Title>
                  <Card.Text>Convert to 0 and 1</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ChallengesPage;
