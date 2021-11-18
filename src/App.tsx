import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import option1 from './Data/option1.json';
import option2 from './Data/option2.json';
import option3 from './Data/option3.json';
import option4 from './Data/options4.json';

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
          <Row>
            <Col className="content">
            {option1.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content" xs={3}>
            {option1.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content" xs={3}>
            {option1.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content" xs={3}>
            {option1.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
          </Row>
          <Row>
            <Col className="content">
            <b>EMAIL</b>
            {option2.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Deploy Email React Apps
            {option2.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Confirm queues are empty before doing the remaining
            {option2.data3.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
                {option2.data4.map((data) => {
                return(
                  <div key={ data.id}><input type="radio" /> <label>{data.value}</label></div>
                )
              })}
            {option2.data5.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            DO THIS LAST as it restarts the scheduler & initiator
            {option2.data6.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>EMAIL</b>
            {option2.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Deploy Email React Apps
            {option2.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Confirm queues are empty before doing the remaining
            {option2.data3.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
                {option2.data4.map((data) => {
                return(
                  <div key={ data.id}><input type="radio" /> <label>{data.value}</label></div>
                )
              })}
            {option2.data5.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            DO THIS LAST as it restarts the scheduler & initiator
            {option2.data6.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>EMAIL</b>
            {option2.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Deploy Email React Apps
            {option2.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Confirm queues are empty before doing the remaining
            {option2.data3.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
                {option2.data4.map((data) => {
                return(
                  <div key={ data.id}><input type="radio" /> <label>{data.value}</label></div>
                )
              })}
            {option2.data5.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            DO THIS LAST as it restarts the scheduler & initiator
            {option2.data6.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>EMAIL</b>
            {option2.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Deploy Email React Apps
            {option2.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Confirm queues are empty before doing the remaining
            {option2.data3.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
                {option2.data4.map((data) => {
                return(
                  <div key={ data.id}><input type="radio" /> <label>{data.value}</label></div>
                )
              })}
            {option2.data5.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            DO THIS LAST as it restarts the scheduler & initiator
            {option2.data6.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
          </Row>
          <Row>
            <Col className="content">
            <b>OTHER Deploys</b><br />
            Encompass React Apps
            {option3.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Other APIs
            {option3.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>OTHER Deploys</b><br />
            Encompass React Apps
            {option3.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Other APIs
            {option3.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>OTHER Deploys</b><br />
            Encompass React Apps
            {option3.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Other APIs
            {option3.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>OTHER Deploys</b><br />
            Encompass React Apps
            {option3.data1.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            Other APIs
            {option3.data2.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
          </Row>
          <Row>
            <Col className="content">
            <b>MISC</b>
            {option4.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>MISC</b>
            {option4.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>MISC</b>
            {option4.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
            <Col className="content">
            <b>MISC</b>
            {option4.data.map((data) => {
                return(
                  <div key={ data.id}><input type="checkbox" /> <label>{data.value}</label></div>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;