import React from 'react';

class JobDetails extends React.Component {
  render() {
    console.log(this.props)
    return <div className="JobDetails">
    <img className="logo" src={this.props.job.logo} alt="logo"/>
  <h1>Company Name: {this.props.job.name}</h1>
  <h2>Job Type: {this.props.job.jobType}</h2>
  <h3>Status: {this.props.job.status}</h3>
  <br/>
  <button className="button" onClick={e => this.props.clickHandler(this.props.job)}>Edit</button>
    </div>;
  }
}

export default JobDetails;
