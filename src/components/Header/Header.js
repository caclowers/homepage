import React, { Component } from "react";
import pic from "../../images/image1.jpeg";
import "../../App.css";

class Header extends Component {
  Smirk = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div id="upperHeader">
        <div >
          <h2 className="swaying">Howdy!</h2>
          <img
            id="headerPic" 
            className="swaying"
            src={pic}
            alt="logo"
            title="Halloween a few years ago"
          />
        </div>
        <div id="headerInfo">
          <h3>i'm Casey Clowers.</h3>
          <p>i'm pretty awesome, and i really excel at a LOT of things.</p>
          <p>
            i'd say the thing i'm{" "}
            <b>
              <em>the best</em>
            </b>{" "}
            at would be... Humility...&nbsp;
            <button onClick={this.Smirk}>smirk</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
