import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import NavbarContainer from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Calculator />
      </div>
    );
  }
}

export default App;
