import React, { Component } from 'react';
import './App.css';
import GridContainer from './Components/GridContainer'
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <h4 className="text-primary">Deploy</h4>
        <GridContainer />
        <br />
      </Container>
    );
  }
}

export default App;