import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavbarContainer from './components/Navbar';
import Quotes from './components/Quotes';
import Home from './components/Home';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quotes" element={<Quotes />} />
            <Route path="/Calculator" element={<Calculator />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
