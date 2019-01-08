import React from 'react';
import JobCard from '../components/jobCard'
class jobList extends React.Component {
  render() {

    let jobs = this.props.jobs.map( job=> <JobCard job={job} key={job.id} detailsHandler={this.props.detailsHandler} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="jobContainer">
        {jobs}
      </div>
    );
  }
}

export default jobList;
