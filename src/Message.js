import React, { Component } from 'react';
import './App.css';

class Message extends Component {
  formatMessage = () => {
    let { player, endGameMessage } = this.props
    if (endGameMessage === `Game over, losers`) {     // if no one wins
      return endGameMessage
    } else if (endGameMessage !== '') {               // if there is a winner
      let switchPlayer = ''
      if (player === 'X') {
        switchPlayer = 'O'
      } else {
        switchPlayer = 'X'
      }
      return `${endGameMessage} ${switchPlayer}`
    } else {                                         // if the game isn't over yet
      return `Current Player: ${player}`
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.formatMessage()}</p>
      </div>
    );
  }
}

export default Message;
