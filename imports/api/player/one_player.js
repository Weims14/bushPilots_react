import React, { Component } from 'react';

class OnePlayer extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <li className="list-group-item">
        Name: {this.props.player.name} <br/>
        Number: {this.props.player.number} <br/>
        Position: {this.props.player.position} <br/>
      </li>
    );
  }
}

export default OnePlayer;
