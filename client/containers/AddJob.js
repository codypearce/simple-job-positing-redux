import React, { Component } from 'react';


export default class ActiveJob extends Component {
  constructor(props) {
    super(props);
  }

 
 
  render() {
    return (
     	<div>
     		<h3>Add Job</h3>
     		<form>
     			<input type="text" placeholder="Title" />
     			<input type="text" placeholder="Company" />
     			<input type="text" placeholder="Location" />
     			<textarea></textarea>
     			<input type='submit' className="btn btn-primary" value="Add job" />
     		</form>
    	</div>
    )
  }
}
