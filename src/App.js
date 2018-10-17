import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Tic-Tac-Toe
        </header>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
