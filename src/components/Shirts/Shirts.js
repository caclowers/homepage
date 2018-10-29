import React, { Component } from 'react';
import '../../App.css';

//import images
import grin from '../../images/Shirts/grin.png';
import hatwink from '../../images/Shirts/hatwink.png';
import ugh from '../../images/Shirts/ugh.png';
import uhoh from '../../images/Shirts/uhoh.png';
import what from '../../images/Shirts/what.png';
import wink from '../../images/Shirts/wink.png';
import yawn from '../../images/Shirts/yawn.png';


let shirts = [
  {
    image: wink,
    tag: "wink"
  }, {
    image: hatwink,
    tag: "the famous Stormy Kromer"
  }, {
    image: ugh,
    tag: "*eye-roll emoji"
  }, {
    image: uhoh,
    tag: "you don't say..."
  }, {
    image: what,
    tag: "really?"
  }, {
    image: grin,
    tag: "heh"
  }, {
    image: yawn,
    tag: "yawn? or yell?"
  }
]


class Shirts extends Component {



  render() {
    let shirtArray = shirts.map((shirt, index) => {
      return (
        <div id="shirts" key={index}>
          <img className="craftImg" src={shirt.image} alt={shirt.tag} ></img>
          <p>{shirt.tag}</p>
        </div>
        
      )
    })
    return (
      <section className="itemSection">
        <h3>some apparel which  i have made... hand-traced on a lightbox with Sharpie</h3>
        <div className="Array">
          {shirtArray}
        </div>
      </section>
    )
  };
};

export default Shirts;
