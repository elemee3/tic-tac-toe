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

  handleClick = () => {
    let { player, isActive } = this.state
    if (isActive && this.props.activeGame) {// only do stuff with active boxes
      if (this.props.count % 2 === 0) {
        player = 'X'                        // change player val to x
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false                   // deactivate box
        })
      } else {
        player = 'O'                        // change player val to o
        this.props.onAllClicks(this.props.id, player)
        this.setState({
          player: player,
          isActive: false                   // deactivate box
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
