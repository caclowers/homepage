import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import pic from './images/casey2.jpeg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="futurePic">
          <p>who, me...</p>
          <p>yeah, you could say i'm focused</p>
          <img src={pic} 
          alt="casey-looking-through-sunglasses-at-the-words-quote-the-future-end-quote">
          </img>
          <p>what are YOU focused on?</p>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
