import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import Navigation from '../../Components/Navigation/Navigation';
import Container from '../../Components/Container/Container';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Navigation />
        </Container>
      </div>
    );
  }
}

export default App;