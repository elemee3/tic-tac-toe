import React, { Component } from 'react';
import Box from './Box';
import Message from './Message';
import './App.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0,
      activeGame: true,
      board: ['', '', '', '', '', '', '', '', ''],
      winList: [[0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]]
    }
  }

  // handleAllClicks() is called from Box.js, which passes id(num) and player state(str)
  // does not return anything, just setState or setState and call handleGameOver
  handleAllClicks = (id, player) => {
    let { clickCount, board } = this.state
    if (this.state.activeGame) {
      clickCount++
      board[id] = player
      this.setState({
        clickCount: clickCount,
        board: board
      })
      // to exit the game, deactivate game board
      if (this.isWin() || this.isLoss()) {
        this.handleGameOver()
        this.setState({
          activeGame: false
        })
      }
    }
  }

  // checks state, returns boolean
  isWin = () => {
    let { board, winList } = this.state
    let isWin = false
    //if the board matches a combo in winList, return true
    for (let i = 0; i < winList.length; i++) {
      if (board[winList[i][0]] !== '' &&
          board[winList[i][0]] === board[winList[i][1]] &&
          board[winList[i][1]] === board[winList[i][2]]) {
        isWin = true
        //break out of the loop when true
        return isWin
      } else {
        isWin = false
      }
    }
    return isWin
  }

  // checks state, returns boolean
  isLoss = () => {
    if (this.state.clickCount >= 9) {
      return true
    } else {
      return false
    }
  }

  // called by Message component, returns string
  handleGameOver = () => {
    if (this.isWin()) {
      return `Winner: `
    } else if (this.isLoss()) {
      return `Game over, losers`
    } else {
      return ''
    }
  }

  // called by Message component, returns string
  playerMessage = () => {
    if (this.state.clickCount % 2 === 0) {
      return `X`
    } else {
      return `O`
    }
  }

  render() {
    let { board } = this.state
    let boxes = board.map((box, index) => {
      return (
        <Box  id={index}
              onAllClicks={this.handleAllClicks}
              count={this.state.clickCount}
              sendPlayer={this.playerMessage}
              activeGame={this.state.activeGame}
        />
      )
    })
    return (
      <div>
        <div className="Board">
          {boxes}
          <Message  player={this.playerMessage()}
                    endGameMessage={this.handleGameOver()}
          />
        </div>
      </div>
    );
  }
}

export default Board;
