import React, { Component } from "react";
import "../../App.css";

//import images
import woodland1 from "../../images/Projects/woodland1.png";
import potatohead1 from "../../images/Projects/potatohead1.png";
import solcycle1 from "../../images/Projects/solcycle1.png";

const project = [
  {
    image: woodland1,
    name: "Woodland Pizza Mobile App -",
    name2: "* Click to go to Google Play *",
    info: "A React-Native mobile app for Woodland Pizza in Savage, MN"
  },
  {
    image: potatohead1,
    name: "The Potato Head Project Web App",
    info: "A React/MongoDB web app for the non-profit Potato Head Project"
  },
  {
    image: solcycle1,
    name: "SOL-Cycle",
    info: "A React/SQL web app for searching UV Index"
  }
];

class Projects extends Component {

  WoodlandStore = () => {
    const url = "https://play.google.com/store/apps/details?id=host.exp.woodland_pizza";
    window.open(url, "_blank");
  };

  render() {
    let projectArray = project.map((project, index) => {
      return (
        <div className="projectImgDiv" onClick={this.WoodlandStore}>
          <div>{project.name}</div>
          <div style={{ fontSize: 18 }}>{project.name2}</div>
          <img
            className="projectImg"
            key={index}
            src={project.image}
            title={project.info}
            alt="project-logo"
            width="5%"
          />
        </div>
      );
    });
    return (
      <section id="about">
        <h3>
          some projects i've worked on{" "}
          <span style={{ fontSize: 10 }}>(hover for more info)</span>
        </h3>
        <div className="projectArray">{projectArray}</div>
      </section>
    );
  }
}

export default Projects;
