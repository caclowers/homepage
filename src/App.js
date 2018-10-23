import React, { Component } from 'react';
import About from './components/About/About.js';
import Focus from './components/Focus/Focus.js';
import Header from './components/Header/Header.js';

import Crafts from './components/Crafts/Crafts.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Focus />
        
        <About />
        <Crafts />
      </div>
    );
  }
}

export default App;
