import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./LandingPage.css";

class Exercises extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ textAlign: "center", padding: "2% 0" }}>
          <Row>
            <Col xs={4}>
              <Link to="/exercise1">
                <Card>
                  <Card.Body>
                    <Card.Title>Exercise 1</Card.Title>
                    <Card.Text>Static Form</Card.Text>
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
export default Exercises;
