import React from 'react';

const jobCard = (props) => {
  return(
    <div className="jobCard">
      <img className="logo" src={props.job.logo} alt="logo"/>
    <h1>Company Name: {props.job.name}</h1>
    <h2>Job Type: {props.job.jobType}</h2>
    <h3>Status: {props.job.status}</h3>
    <button className="button" onClick={e => props.detailsHandler(props.job)}>See More</button>
    
    </div>
  )
}

export default jobCard
