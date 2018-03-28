import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch  } from 'react-router-dom';

import App from '../imports/api/App';
import PlayerContainer from '../imports/api/player/player_container';
import LoginForm from '../imports/api/login/login_form';
import ForgotPassword from '../imports/api/login/forgot_password';
import RegisterForm from '../imports/api/login/register_form';
import Admin from '../imports/api/admin/admin';

const routes = (
  <BrowserRouter>
      <Switch>
          <Route path="/player" component={PlayerContainer}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/register-form" component={RegisterForm}/>
          <Route path="/admin" component={Admin}/>
      </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});

//<Route path="/auth-book/:authorId" component={ AuthorBookContainer } />
