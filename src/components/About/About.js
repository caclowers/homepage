import React, { Component } from 'react';
import '../../App.css';
import git from '../../images/tech/git.png';
import bootstrap from '../../images/tech/bootstrap.png';
import CSS3 from '../../images/tech/CSS3.png';
import express from '../../images/tech/express.png';
import angular from '../../images/tech/angular.png';
import html5 from '../../images/tech/html5.png';
import jquery from '../../images/tech/jquery.png';
import js from '../../images/tech/js.png';
import mongodb from '../../images/tech/mongodb.png';
import node from '../../images/tech/node.png';
import postgresql from '../../images/tech/postgresql.png';
import react from '../../images/tech/react.png';
import redux from '../../images/tech/redux.png';
import sagas from '../../images/tech/sagas.png';

const logos = [
  angular,
  bootstrap,
  CSS3,
  express,
  git,
  html5,
  jquery,
  js,
  mongodb,
  node,
  postgresql,
  react,
  redux,
  sagas
];

class About extends Component {

   

  render() {
    let logoArray = logos.map(logo => {
      return <img src={logo} alt="git-logo" width="5%"></img>
    })
    return (
      <section id="about">
      <p>some stuff i've learned</p>
      <div id="logoArray">
        {logoArray}
      </div>
       
      </section>
    )
  };
};

export default About;
