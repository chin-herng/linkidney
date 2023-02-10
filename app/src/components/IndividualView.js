import JobCard from "./JobCard";
import React from "react";

const IndividualView = ({ jobs }) => {
  jobs.map((job) => <JobCard job={job} />);
};

export default IndividualView;
