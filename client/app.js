import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './components/shared/Header';
import SearchBar from './components/jobs/SearchBar';
import JobsList from './components/jobs/JobsList';

require("./styles/style.css");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <JobsList />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
