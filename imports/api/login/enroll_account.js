import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

class EnrollAccount extends Component {

  componentDidMount() {
    browserHistory.push(`/reset-password/${this.props.params.token}`);
  }

  render() {
    return (
      <div className="login-card">
      <h1>Enroll Account</h1><br/>
        <div className="login-help">
          <Link to='/'>Login</Link> • <a href="#">Forgot Password</a>
        </div>
      </div>
    );
  }
}

export default EnrollAccount;
