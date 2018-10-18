import React, { Component } from 'react';
import Box from './Box'
import './App.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0,
      board: ['', '', '', '', '', '', '', '', ''],
      winList: [[0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]]
    }
  }

  handleAllClicks = (id, player) => {
    let { clickCount, board } = this.state
    clickCount++
    board[id] = player
    this.setState({
      clickCount: clickCount,
      board: board
    })
    if (this.isWin() || this.isLoss()) {
      this.handleGameOver(player)
    }
  }

  isWin = () => {
    let { board, winList } = this.state
    let isWin = false
    //if the board matches a combo in winList, return true
    for (let i = 0; i < winList.length; i++) {
      if (board[winList[i][0]] !== '' &&
          board[winList[i][0]] === board[winList[i][1]] &&
          board[winList[i][1]] === board[winList[i][2]]) {
        isWin = true
        return isWin
      } else {
        isWin = false
      }
    }
    return isWin
  }

  isLoss = () => {
    if (this.state.clickCount > 7) {
      return true
    } else {
      return false
    }
  }

  handleGameOver = (player) => {
    if (this.isWin()) {
      alert(`Game over, ${player} wins!`)
    } else {
      alert(`Game over, losers`)
    }
  }

  render() {
    let { board } = this.state
    let boxes = board.map((box, index) => {
      return (
        <Box contents={box} id={index} onAllClicks={this.handleAllClicks} count={this.state.clickCount} />
      )
    })
    return (
      <div className="Board">
        {boxes}
      </div>
    );
  }
}

export default Board;
