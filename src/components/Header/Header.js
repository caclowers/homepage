import React, { Component } from 'react';
import logo from '../../image1.jpeg';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div id="upperHeader">
          <div id="headerPic" className="swaying">
            <h2>
              Howdy!
            </h2>
            <img className="swaying" src={logo} alt="logo" />
          </div>
          <div id="headerInfo">
            <h1>
              I'm Casey Clowers.
          </h1>
            <p>
              I'm pretty awesome, and I really excel at a LOT of things.
          </p>
            <p>
              I'd say the thing I'm <b><em>best</em></b> at would be... Humility...&nbsp;
              <span style={{ fontSize: 8 }}>
                <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Self-hatred#Self-deprecation">
                  wink
                </a>
              </span>
            </p>
          </div>
        </div>
      </header>
    );
  };
};

export default Header;