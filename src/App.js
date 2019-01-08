import React, { Component } from "react";
import "./App.css";
import JobList from "./containers/jobList";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobDetails from "./components/JobDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <JobForm />
        <div className="listdetails">
          <JobList />
          <JobDetails />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
