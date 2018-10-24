import React, { Component } from 'react';
import About from './components/About/About.js';
import Focus from './components/Focus/Focus.js';
import Header from './components/Header/Header.js';
import Crafts from './components/Crafts/Crafts.js';
import Shirts from './components/Shirts/Shirts.js';

import './App.css';


class App extends Component {

  Top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />

        <Crafts />
        <Shirts />
        <Focus />
        <div id="iframeDiv">
          <iframe
            title="gif-of-ryan-reynolds-smirking"
            src="https://giphy.com/embed/oYxNkISitSQo"
            width="480"
            height="202"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen>
          </iframe>
          <button onClick={this.Top}>
            back to the top folks!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
