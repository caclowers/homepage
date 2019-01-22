import React, { Component } from 'react';
import '../../App.css';

//import images
import woodland1 from '../../images/Projects/woodland1.png';
import potatohead1 from '../../images/Projects/potatohead1.png';
import solcycle1 from '../../images/Projects/solcycle1.png';



const project = [
  {
    image: woodland1,
    name:"Woodland Pizza Mobile App",
    info: "A React-Native mobile app for Woodland Pizza in Savage, MN"
  },{
    image: potatohead1,
    name:"The Potato Head Project Web App",
    info: "A React/MongoDB web app for the non-profit Potato Head Project"
  },{
    image: solcycle1,
    name:"SOL-Cycle",
    info: "A React/SQL web app for searching UV Index"
  },
];

class Projects extends Component {
  

  render() {
    let projectArray = project.map((project, index) => {
      return (
      <div className="projectImgDiv" onClick={this.openModal}>
        <div>{project.name}</div>
        <img 
        className="projectImg"
        key={index}
        src={project.image}
        title={project.info}
        alt="project-logo"
        width="5%">
        </img>
      </div>)
    })
    return (
      <section id="about">
        <h3>some projects i've worked on <span style={{fontSize:10}}>(hover for more info)</span></h3> 
        <div className="logoArray">
          {projectArray}
        </div>
      </section>
    )
  };
};

export default Projects;
