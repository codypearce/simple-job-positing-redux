import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <h1>Test</h1>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
