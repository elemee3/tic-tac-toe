import React, { Component } from 'react';
import './App.css';

class Message extends Component {
  formatMessage = () => {
    let { player, endGameMessage } = this.props
    if (endGameMessage === `Game over, losers`) {
      return endGameMessage
    } else if (endGameMessage !== '') {
      let switchPlayer = ''
      if (player === 'X') {
        switchPlayer = 'O'
      } else {
        switchPlayer = 'X'
      }
      return `${endGameMessage} ${switchPlayer}`
    } else {
      return `Current Player: ${player}`
    }
  }

  render() {
    return (
      <div className="App">
        Message Board <br />
        {this.formatMessage()}
      </div>
    );
  }
}

export default Message;
