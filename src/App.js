import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Board from './Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameMode: 'regular'
    }
  }

  switchMode = (modeSelection) => {
    this.setState({ gameMode: modeSelection })
  }

  handleGameReset = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tic Tac Toe</h1>
          <ButtonGroup>
            <Button onClick={() => this.switchMode('legendary')}
            active={this.state.gameMode === 'legendary'}>
              Legendary Mode
            </Button>
            <br />
            <Button onClick={this.handleGameReset}>
              Reset Game
            </Button>
          </ButtonGroup>
        </header>
        <div className={this.state.gameMode === 'legendary' ? 'Spinner' : ''}>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
