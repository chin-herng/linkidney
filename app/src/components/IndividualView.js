import JobCard from "./JobCard";
import React from "react";

const IndividualView = ({ jobs }) => {
  jobs.map((job) => <JobCard />);
};

export default IndividualView;
