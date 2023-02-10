import JobCard from "./JobCard";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  FormLabel,
  Select,
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
  const jobTypes = [
    "Accounting/Finance",
    "Audit & Taxation",
    " General/Cost Accounting",
    "Corporate Finance/Investment",
    " Banking/Financial",
    " Admin/Human Resources",
    " Clerical/Administrative Support",
    "   Human Resources",
    "Secretarial/Executive Personal Assistant",
    " Sales/Marketing",
    "Marketing",
    "Sales",
    "Merchandising",
    "E-commerce",
    "Digital Marketing",
    "Arts/media/Communications",
    "Advertising",
    "Arts/Creative Design",
    "Services",
    "Customer Service",
    "Logistics/Supply Chain",
    "Tech & Helpdesk Support",
    "Hotel/Restaurant",
    "Food/Beverage/Restaurant",
    " Hotel/Tourism",
    "Education/Training",
    "Education",
    "Computer/Information Technology",
    "IT-Hardware",
    "IT-Software",
    " Manufacturing",
    " Maintenance",
    "Quality Assurance",
    "Others",
  ];

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
            <Form.Select aria-label="Default select example">
              {jobTypes.map((jobType) => (
                <option>{jobType}</option>
              ))}
            </Form.Select>
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
      <Row xs={4} md={4} className="g-4" style={{ margin: "0 auto" }}>
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
