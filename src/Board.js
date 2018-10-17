import React, { Component } from 'react';
import Box from './Box'
import './App.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ['', '', '', '', '', '', '', '', '']
    }
  }
  render() {
    let { board } = this.state
    let boxes = board.map((box, index) => {
      return (
        <Box contents={box} id={index} />
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
