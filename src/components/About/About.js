import React, { Component } from 'react';
import '../../App.css';

//import images
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
import reactnative from '../../images/tech/react-native.png';


const logos = [
  {
    logo: js,
    info: "Javascript"
  },{
    logo: html5,
    info: "HTML5"
  },{
    logo: CSS3,
    info: "CSS3"
  },{
    logo: angular,
    info: "AngularJS"
  },{
    logo: jquery,
    info: "jQuery"
  },{
    logo: bootstrap,
    info: "Bootstrap"
  },{
    logo: express,
    info: "ExpressJS"
  },{
    logo: node,
    info: "Node.JS"
  },{
    logo: git,
    info: "Git"
  },{
    logo: react,
    info: "ReactJS"
  },{
    logo: reactnative,
    info: "React Native"
  },{
    logo: redux,
    info: "Redux"
  },{
    logo: sagas,
    info: "Redux-Sagas"
  },{
    logo: mongodb,
    info: "MongoDB"
  },{
    logo: postgresql,
    info: "PostgreSQL"
  }
];

class About extends Component {



  render() {
    let logoArray = logos.map((logo, index) => {
      return <img
        className="logoImg"
        key={index}
        src={logo.logo}
        title={logo.info}
        alt="git-logo"
        width="5%">
      </img>
    })
    return (
      <section id="about">
        <h3>some stuff i've learned with my brain <span style={{fontSize:10}}>(a non-comprehensive list)</span></h3>
        <div id="logoArray">
          {logoArray}
        </div>
      </section>
    )
  };
};

export default About;
