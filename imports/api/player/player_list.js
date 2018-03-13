import React, { Component } from 'react';
import OnePlayer from './one_player.js';
import { Player } from '../collections/players';

class PlayerList extends Component
{
  constructor(props)
  {
    super(props);
  }

  renderPlayerItems()
  {
    return this.props.players.map((player) => {
      return (
        <OnePlayer key={player._id}
                   player={player}/>
      );
    });
  }
  render()
  {
    return(
      <ul className='col-md-12 list-group'>
        {this.renderPlayerItems()}
      </ul>
    );
  }
}

export default PlayerList;
