import React, { Component } from "react";
class JobForm extends Component {
  render() {
    return (
      <div className="formDiv">
        <h1 className="h1Header">Form</h1>
        <form className="jobForm">
          <div className="options">
            <label className="label">Logo link</label>
            <input type="text" name="logo" value={/*value of job logoLink*/}/>
          </div>
          <div className="options">
            <label className="label">Company Name</label>
            <input type="text" name="name" value={/*value of job name*/}/>
          </div>
          <div className="options">
            <label className="label">Job Type</label>
            <select name="jobType" value={/*value of job type*/}>
              <option value="Part-Time">Part Time</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="options">
            <label className="label">Status</label>
            <select name="status" value={/*value of job status*/}>
              <option value="Pending 😐">Pending</option>
              <option value="Interviewing 😏">Interviewing</option>
              <option value="Denied 😭">Denied</option>
              <option value="Offer 🤩">Offer</option>
            </select>
          </div>
          <div className="options">
            <button className="button">Change</button>
          </div>
        </form>
      </div>
    );
  }
}

export default JobForm;
