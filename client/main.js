import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch  } from 'react-router-dom';

import App from '../imports/api/App.js';
import PlayerContainer from '../imports/api/player/player_container.js';

const routes = (
  <BrowserRouter>
      <Switch>
          <Route path="/player" component={PlayerContainer}/>
      </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});

//<Route path="/auth-book/:authorId" component={ AuthorBookContainer } />
