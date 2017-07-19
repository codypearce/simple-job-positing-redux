import React, { Component } from 'react';


export default class ActiveJob extends Component {
  constructor(props) {
    super(props);
  }

 
 
  render() {
    return (
     	<div className="container">
     		<h3 className="text-center mb-5">Add Job</h3>
     		<form className="d-flex flex-column ">
     			<input className="form-control mb-3 w-50 mx-auto" type="text" placeholder="Title" />
     			<input className="form-control mb-3 w-50 mx-auto" type="text" placeholder="Company" />
     			<input className="form-control mb-3 w-50 mx-auto" type="text" placeholder="Location" />
     			<div className="form-group">
					<label htmlFor="textarea" className="d-block text-center mx-auto">Description</label>
					<textarea className="form-control mb-3 w-50 mx-auto" id="textarea" rows="3"></textarea>
				</div>
     			<input type='submit' className="btn btn-primary w-50 mx-auto" value="Add job" />
     		</form>
    	</div>
    )
  }
}
