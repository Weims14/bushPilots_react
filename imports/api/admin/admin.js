import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Meteor } from 'meteor/meteor';

import { Player } from '../collections/players';
import PlayerList from '../player/player_list';

class Admin extends TrackerReact(React.Component)
{
  constructor(props) {
    super(props);
    const playerId = props.match.params.playerId;
    this.state = {
      number:'',
      name: '',
      position: '',
      _id: '',
    };
  }

  playerInfo()
  {
    return Player.findOne({});
  }

  resetState()
  {
    this.setState({
      number:'',
      name: '',
      position: '',
      _id: '',
    });
  }

  handleChange(field, event)
  {
    this.setState({ [field]: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event)
  {
    event.preventDefault();
    console.log(this.state);
    Meteor.call('player.insert', this.state, (error, result) => {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log(result);
      }
    });
    this.resetState();
  }

  render(){
    if(!this.playerInfo()) return(
      <form id="submissonForm" onSubmit={this.handleSubmit.bind(this)}>
      <label htmlFor="number">Number:</label>
      <input type="number"
        name="number"
        value={this.state.number}
        onChange={this.handleChange.bind(this,'number')}
        id="number"/>

       <label htmlFor="name">Name:</label>
       <input type="text"
         name="name"
         value={this.state.name}
         onChange={this.handleChange.bind(this,'name')}
         id="name"/>

         <label  htmlFor="position">Position:</label>
         <select name="position"
                 value={this.state.position}
                 onChange={this.handleChange.bind(this,'position')}>
           <option>Forward</option>
           <option>Defense</option>
           <option>Goalie</option>
         </select>


     <input type="submit"
           name="submit"
           id="submit"/>
      </form>
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


export default Admin;
