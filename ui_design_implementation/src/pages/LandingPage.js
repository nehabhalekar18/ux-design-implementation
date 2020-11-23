import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Container style={{ textAlign: "center", padding: "5% 0" }}>
          <Row>
            <Col xs={6}>
            <Link to={"/challenges"}>
              <Card>
                <Card.Body>
                  <Card.Title>Challenges</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col xs={6}>
            <Link to={"/exercises"}>
              <Card>
                <Card.Body>
                  <Card.Title>Exercise</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          </Row>
          {/* <Link to={"/login"}>
          <Button className="loginBtn">Get Started</Button>
          </Link> */}
        </Container>
      </div>
    );
  }
}
export default LandingPage;
