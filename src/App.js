import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import pic from './casey2.jpeg';
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
      </div>
    );
  }
}

export default App;
