import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import "./header.css"
class Header extends Component {
  render(){
    return (
    <div className="Header">
      <Row>
        <Col xs={6}>
          <h2>
        UI Design & Implementation
        </h2>
        </Col>
        <Col xs={{span:2,offset:4}} style={{lineHeight:32,textAlign:"right"}} >
          <h6>
            Neha Bhalekar<br></br>11014043
          </h6>
        </Col>
        </Row>
    </div>
  );
}
}
export default Header;
