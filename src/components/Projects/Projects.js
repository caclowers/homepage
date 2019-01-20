import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../../App.css';

//import images
import woodland1 from '../../images/Projects/woodland1.png';
import potatohead1 from '../../images/Projects/potatohead1.png';
import solcycle1 from '../../images/Projects/solcycle1.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


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
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.style.color = '#f00';
  // }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let projectArray = project.map((project, index) => {
      return (
      <div className="projectImgDiv">
        <div onClick={this.openModal}>
          {project.name}
        </div>
        <img 
        onClick={this.openModal}
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
        <h3>some projects i've worked on {/* <span style={{fontSize:10}}>(click for more info)</span>*/}</h3> 
        
        <div className="logoArray">
          {projectArray}

          {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        ></Modal>
        </div>
      </section>
    )
  };
};

export default Projects;
