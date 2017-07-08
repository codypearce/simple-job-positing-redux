import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './components/shared/Header';

require("./styles/style.css");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
