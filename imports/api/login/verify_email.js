import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

class VerifyEmail extends Component {

  componentDidMount() {
    Accounts.verifyEmail(this.props.params.token, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Email verified! Thanks!', 'success');
        browserHistory.push('/projects');
      }
    });
  }

  render() {
    return (
      <div className="login-card">
      <h1>Verify Email</h1><br/>
        <div className="login-help">
          <Link to='/'>Login</Link> • <a href="#">Forgot Password</a>
        </div>
      </div>
    );
  }
}

export default VerifyEmail;
