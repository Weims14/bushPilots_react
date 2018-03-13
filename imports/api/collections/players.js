import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

Meteor.methods({
  //---------------------------------------------------------------------------
  'player.remove': function (player) {
    check(player._id, String);

    return player.remove(player._id);
  },
  //---------------------------------------------------------------------------
  'player.update': function (player) {
    check(player._id, String);
    check(player.number, Number);
    check(player.name, String);
    check(player.position, String);

    return player.update(player._id,{
      $set: {
        number: player.number,
        name: player.name,
        position: player.position,
      },
    });
  },
  //---------------------------------------------------------------------------
  'player.insert': function (player) {
    check(player.number, Number);
    check(player.name, String);
    check(player.position, String);

    return Player.insert({
      number: player.number,
      name: player.name,
      position: player.position,
    });
  },
});

export const Player = new Mongo.Collection('player');
//Get list of all method names
const PLAYER_METHODS = ['player.remove', 'player.update', 'player.insert'];

if (Meteor.isServer) {
  //only allow 5 operation per connection per second
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(PLAYER_METHODS, name);
    },
    connectionId(){return true;},
  }, 5, 1000);
}
