import React, { Component } from 'react';
import logo from './images/forest.jpg';
import sunday from './fonts/sunday.ttf';
import LaserMetal from './fonts/LaserMetal.ttf';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="wrapper">
        <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
        <div class="overlay">
          <h1>Mausehochzeit</h1>
          <h2>Save the Date: 31.08.2019</h2>
        </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
