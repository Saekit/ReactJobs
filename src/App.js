import React, { Component } from 'react';
import './App.css';
import JobList from './containers/jobList'
import Header from './components/Header'
import JobForm from './components/JobForm'
import JobDetails from './components/JobDetails'

class App extends Component {
  state={
    jobs:[],
    job: {},
    jobDetail:{}
  }
  componentDidMount(){

    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(json => this.setState({jobs:json}))
  }

  clickHandler = (thisJob) => {
    this.setState({job:thisJob})
  }

  submitHandler = (e) => {
    if(this.state.job.id){
      const jobId = this.state.job.id
    e.preventDefault()
    fetch(`http://localhost:3000/jobs/${this.state.job.id}`,{
      method: "PATCH",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify(this.state.job)
    })
    .then(res => res.json())
    .then(json => {
      const newJobArray = this.state.jobs.map(job => {
          if(job.id === jobId){
            return json
          } else{
            return job
          }
        })
this.setState({jobs: newJobArray,jobDetail:{},job:{}})
})}
  }
  nameHandler = (e) => {
    let newName=e.target.value
    this.setState((prevState)=> {
      return {job: {...prevState.job, name: newName}}
})
}
  logoHandler = (e) => {
  let newLogo=e.target.value
  this.setState((prevState)=>{
    return {job: {...prevState.job, logo:newLogo}}
  })
}

typeHandler = (e) => {
  let newType=e.target.value
  this.setState((prevState)=>{
    return {job: {...prevState.job, jobType:newType}}
  })
}

statusHandler = (e) => {
  let newStatus=e.target.value
  this.setState((prevState)=>{
    return {job: {...prevState.job, status:newStatus}}
  })
}

detailsHandler = (Job) => {
  this.setState({
    job: {},
    jobDetail:Job,
  })
}
  render() {
    return (
      <React.Fragment>
      < Header />
      <JobForm job={this.state.job} statusHandler={this.statusHandler} typeHandler={this.typeHandler} nameHandler={this.nameHandler} logoHandler={this.logoHandler} submitHandler={this.submitHandler}/>
<div className="listdetails">
    <JobList jobs={this.state.jobs}  detailsHandler={this.detailsHandler}/>
    <JobDetails job={this.state.jobDetail} clickHandler={this.clickHandler}/>
    </div>
    </React.Fragment>
    );
  }
}

export default App;
