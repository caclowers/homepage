import React, { Component } from 'react';
import logo from '../cowboy.jpeg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img className="trembling App-logo" src={logo} alt="logo" />
        </header>
    );
  }
}

export default Header;
