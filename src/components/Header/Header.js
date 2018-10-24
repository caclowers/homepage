import React, { Component } from 'react';
import pic from '../../images/image1.jpeg';
import '../../App.css';

class Header extends Component {

  Smirk = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  }



  render() {
    return (
      
        <div id="upperHeader">
          <div id="headerPic" className="swaying">
            <h2>
              Howdy!
            </h2>
            <img className="swaying" src={pic} alt="logo" />
          </div>
          <div id="headerInfo">
            <h1>
              I'm Casey Clowers.
          </h1>
            <p>
              i'm pretty awesome, and i really excel at a LOT of things.
            </p>
            <p>
              i'd say the thing i'm <b><em>the best</em></b> at would be... Humility...&nbsp;
              <span style={{ fontSize: 8 }}>
                <button onClick={this.Smirk}>
                  smirk
                </button>
              </span>
            </p>
          </div>
        </div>
    );
  };
};

export default Header;
