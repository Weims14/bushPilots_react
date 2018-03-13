import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';

import { Player } from '../collections/players';
import PlayerList from './player_list';

class PlayerContainer extends TrackerReact(React.Component){
  constructor(props) {
    super(props);
    const playerId = props.match.params.playerId;
  }

  playerInfo()
  {
    return Player.findOne({});
  }

  render(){
    if(!this.playerInfo()) return(
      <div>Loading...</div>
    );

    const vPlayer = this.playerInfo();
    return(
      <div>
        <h1>Hello</h1>
        <section>
          <PlayerList player={vPlayer}/>
        </section>
      </div>
    );

  }
}

export default PlayerContainer;
