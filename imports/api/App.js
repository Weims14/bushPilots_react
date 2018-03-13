import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
          <h1>App</h1>
        </div>
    );
  }
}

export default App;
