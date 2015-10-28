import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import Ribbon from './Ribbon';

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <Container />
        <Ribbon />
      </div>
    );
  }

}

export default App;
