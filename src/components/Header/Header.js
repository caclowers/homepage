import React, { Component } from 'react';
import logo from '../../image1.jpeg';
import '../../App.css';
import pic from '../../casey.jpeg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div id="headerPic">
          <img className="swaying App-logo" src={logo} alt="logo" />
          <h2>
            Howdy!
          </h2>
        </div>
        <div id="headerInfo">
          <h1>
            I'm Casey Clowers.
          </h1>
          <p>
            I'm pretty awesome, and I really excel at a LOT of things.
          </p>
          <p>
            I'd say the thing I'm <b><em>best</em></b> at would be... Humility. <span style={{fontSize:8}}>;)</span>
          </p>

        </div>
        <div className="futurePic">
          <img  src={pic}></img>
        </div>
      </header>
    );
  };
};

export default Header;
