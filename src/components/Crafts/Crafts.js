import React, { Component } from 'react';
import '../../App.css';
import armguard from '../../images/Things/armguard.png';
import banner from '../../images/Things/banner.png';
import blanket from '../../images/Things/blanket.png';
import bottles from '../../images/Things/bottles.png';
import brasspins from '../../images/Things/brasspins.png';
import coinring from '../../images/Things/coinring.png';
import costumes from '../../images/Things/costumes.png';
import framebolsters from '../../images/Things/framebolsters.png';


let crafts = [
  {
    image: armguard,
    tag: "leather armguards... #rennaisancefestival #dragonscale #umyesplease"
  }, {
    image: banner,
    tag: "Game of Thrones banners need suitable hangers."
  }, {
    image: blanket,
    tag: "A wool blanket that i machine-knitted as a Christmas gift for my parents."
  }, {
    image: bottles,
    tag: "i collected a bunch of bottles and crocheted some string on them. They're pretty great."
  }, {
    image: brasspins,
    tag: "Saw these on Amazon and said to myself, \"Self, you can make those.\" So i did. "
  }, {
    image: coinring,
    tag: "A Belizean $1 coin. The decagonal edge makes a great 'crown' effect when turned into a ring."
  }, {
    image: costumes,
    tag: "First trip to the Minnesota Renaissance Festival. My friends were great sports. i made all of the costumes the day before"
  }, {
    image: framebolsters,
    tag: "Bought the frame, but it needed ... something. i added the corner bolsters. Now it's right."
  }
]
console.log(crafts);


class Things extends Component {



  render() {
    let craftArray = crafts.map(craft => {
      return (
        <div id="crafts">
          <img className="craftImg" src={craft.image} alt={craft.tag} ></img>
          <p>{craft.tag}</p>
        </div>
        
      )
    })
    return (
      <section className="itemSection">
        <h3>some things i've made with my hands</h3>
          <div className="Array">
          {craftArray}
        </div>
        
      </section>
    )
  };
};

export default Things;
