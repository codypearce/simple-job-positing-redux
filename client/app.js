import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './components/shared/Header';
import JobsList from './containers/JobsList';
import ActiveJob from './containers/ActiveJob';

require("./styles/style.css");

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobsList />
        <ActiveJob />
      </div>
    )
  }
}



ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, document.getElementById('root'));
