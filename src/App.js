import React, { Component } from "react";

import About from "./components/About/About.js";
import Focus from "./components/Focus/Focus.js";
import Header from "./components/Header/Header.js";
import Crafts from "./components/Crafts/Crafts.js";
import Shirts from "./components/Shirts/Shirts.js";
import Projects from "./components/Projects/Projects.js";

// import Carousel from "./components/Carousel/Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./App.css";

class App extends Component {
  Top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  selfHatred = () => {
    const url = "https://en.wikipedia.org/wiki/Self-hatred#Self-deprecation";
    window.open(url, "_blank");
  };

  render() {
    return (
      <div className="App">
        <div className="linkDiv">
          <a href="mailto:caclowers@gmail.com">email</a>
          <a
            href="https://github.com/caclowers"
            rel="noopener noreferrer"
            target="_blank"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/caseyclowers/"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </a>
        </div>
        <Header />
        <About />
        <Projects />
        {/* <Crafts />
        <Shirts /> */}
        <Focus />
        <div id="iframeDiv">
          <iframe
            title="gif-of-ryan-reynolds-smirking"
            src="https://giphy.com/embed/oYxNkISitSQo"
            href="https://en.wikipedia.org/wiki/Self-hatred#Self-deprecation"
            width="480"
            height="202"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <div id="bottomButtons">
            <button onClick={this.selfHatred}>get it...?</button>
            <button onClick={this.Top}>back to the top folks!</button>
          </div>
        </div>
        <div className="linkDiv">
        <a href="mailto:caclowers@gmail.com">email</a>
        <a
          href="https://github.com/caclowers"
          rel="noopener noreferrer"
          target="_blank"
        >
          github
          </a>
        <a
          href="https://www.linkedin.com/in/caseyclowers/"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin
          </a>
        </div>
        
        <div style={{ height: 128 }}></div>
      </div>
    );
  }
}

export default App;
