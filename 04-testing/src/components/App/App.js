import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Clock from '../Clock/Clock'

function App() {
  return (
    <div className="App">
      <h1>I'm the App</h1>
      <p>Vebkomas, 2020</p>
      <div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
