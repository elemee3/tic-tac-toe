import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tic Tac Toe</h1>
        </header>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
