import React, { Component } from 'react';
import Dropdown from './Components/Dropdown.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get Your Anime Stats Here</h1>
		<Dropdown />
      </div>
    );
  }
}

export default App;
