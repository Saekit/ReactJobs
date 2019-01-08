import React, { Component } from 'react';
class JobForm extends Component{


  render() {
    return (
      <div className="formDiv">
      <h1 className="h1Header">Form</h1>
      <form className="jobForm" onSubmit={(e) =>this.props.submitHandler(e)}>

    <div className="options">
    <label className="label">Logo link</label>
    <input type="text" name="logo" value={this.props.job.logo} onChange={e=> this.props.logoHandler(e)}/>
    </div>
    <div className="options">
    <label className="label">Company Name</label>
    <input type="text" name="name" value={this.props.job.name} onChange={e=> this.props.nameHandler(e)}/>
    </div>
        <div className="options">
    <label className="label">Job Type</label>
    <select name="jobType" value={this.props.job.jobType} onChange={e=> this.props.typeHandler(e)}>
    <option value="Part-Time">Part Time</option>
    <option value="Full-Time">Full-Time</option>
    <option value="Contract">Contract</option>
    </select>
    </div>
        <div className="options">
    <label className="label">Status</label>
  <select name="status" value={this.props.job.status} onChange={e=> this.props.statusHandler(e)}>
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
  </div>);
  }
}

export default JobForm;
