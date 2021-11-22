import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import {Content, EmailContent, DeployContent, MISC} from './Components/GridContent'

class App extends Component {
  render() {
    return (
      <div>
        <p style={{color: "blue", paddingLeft: "80px", paddingTop: "30px"}}>Deploy</p>
        <Container>
          <Row >
            <Col className="header">Staging</Col>
            <Col className="header">AU</Col>
            <Col className="header">CA</Col>
            <Col className="header">US</Col>
          </Row>
          <Row >
            <Col className="content"><Content /></Col>
            <Col className="content"><Content /></Col>
            <Col className="content"><Content /></Col>
            <Col className="content"><Content /></Col>
          </Row>
          <Row >
            <Col className="content"><EmailContent /></Col>
            <Col className="content"><EmailContent /></Col>
            <Col className="content"><EmailContent /></Col>
            <Col className="content"><EmailContent /></Col>
          </Row>
          <Row >
            <Col className="content"><DeployContent /></Col>
            <Col className="content"><DeployContent /></Col>
            <Col className="content"><DeployContent /></Col>
            <Col className="content"><DeployContent /></Col>
          </Row>
          <Row >
            <Col className="content"><MISC /></Col>
            <Col className="content"><MISC /></Col>
            <Col className="content"><MISC /></Col>
            <Col className="content"><MISC /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;