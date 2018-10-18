import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: '',
      isActive: true
    }
  }

  // if the game and the particular square are active, set player val based on counter,
  // call onAllClicks() in the parent, and setState
  handleClick = () => {
    let { player, isActive } = this.state
    if (isActive && this.props.activeGame) {
      if (this.props.count % 2 === 0) {
        player = 'X'
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false
        })
      } else {
        player = 'O'
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false
        })
      }
    }
  }

  render() {
    return (
      <div className="Box" onClick={this.handleClick} key={this.props.id} >
        {this.state.player}
      </div>
    );
  }
}

export default Box;
