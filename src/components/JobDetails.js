import React from "react";

class JobDetails extends React.Component {
  render() {
    return (
      <div className="JobDetails">
        <img className="logo" src={/*render logo*/} alt="logo" />
        <h1>Company Name: {/*render name*/}</h1>
        <h2>Job Type: {/*render type */}</h2>
        <h3>Status: {/*render status */}</h3>
        <br />
        <button className="button">Edit</button>
      </div>
    );
  }
}

export default JobDetails;
