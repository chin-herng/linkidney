import JobCard from "./JobCard";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  FormLabel,
} from "react-bootstrap";

const IndividualView = ({ jobs }) => {
  const [company, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryMin, setSalaryMin] = useState(0);
  const [salaryMax, setSalaryMax] = useState(100000);
  const [area, setArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the filtered results here, for example:
    // applyFilters({ company, jobType, area, salary });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row style={{ margin: "0 auto" }}>
          <Col xs={12} md={3}>
            <FormLabel>Company</FormLabel>
            <FormControl
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </Col>
          <Col xs={12} md={3}>
            <FormLabel>Job Type</FormLabel>
            <FormControl
              type="text"
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
            />
          </Col>
          <Col xs={12} md={3}>
            <FormLabel>Area</FormLabel>
            <FormControl
              type="text"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </Col>
          <Col xs={12} md={3} className="d-flex align-items-end">
            <Button type="submit">Filter</Button>
          </Col>
        </Row>
      </Form>
      <Row xs={4} md={2} className="g-4" style={{ margin: "0 auto" }}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Row>
    </>
  );
};

export default IndividualView;
{
  /* <Row xs={1} md={2} className="g-4" style={{ margin: "0 auto" }}>
{jobs.map((job) => (
  <JobCard key={job.id} job={job} />
))}
</Row> */
}
