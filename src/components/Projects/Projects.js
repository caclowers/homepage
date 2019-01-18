import React, { Component } from 'react';
import '../../App.css';

//import images



const project = [
  {
    image:1,
    info: ""
  },{
    image:1,
    info: ""
  },{
    image:1,
    info: ""
  },
];

class Projects extends Component {


  render() {
    let projectArray = project.map((logo, index) => {
      return <img
        className="logoImg"
        key={index}
        src={project.image}
        title={project.info}
        alt="git-logo"
        width="5%">
      </img>
    })
    return (
      <section id="projects">
        <h3>some projects i've worked on</h3>
        <div id="logoArray">
          {projectArray}
        </div>
      </section>
    )
  };
};

export default Projects;
