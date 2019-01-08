import React from "react";

const jobCard = () => {
  return (
    <div className="jobCard">
      <img className="logo" src={/*render logo*/} alt="logo" />
      <h1>Company Name: {/*render name*/}</h1>
      <h2>Job Type: {/*render type */}</h2>
      <h3>Status: {/*render status */}</h3>
      <button className="button">See More</button>
    </div>
  );
};

export default jobCard;
