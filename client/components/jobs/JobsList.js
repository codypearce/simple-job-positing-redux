import React, { Component } from 'react';

import Job from './Job';

export default class JobList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Job />
      </div>
    )
  }
}
