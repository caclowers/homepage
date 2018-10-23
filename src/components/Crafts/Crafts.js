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
  armguard,
  banner,
  blanket,
  bottles,
  brasspins,
  coinring,
  costumes,
  framebolsters
]
console.log(crafts);


class Things extends Component {



  render() {
    let craftArray = crafts.map(craft => {
      return <img className="craftImg" src={craft} alt="git-logo" ></img>
    })
    return (
      <section id="crafts">
        <p>things i've made with my hands</p>
        <div id="craftArray">
          {craftArray}
        </div>
      </section>
    )
  };
};

export default Things;
