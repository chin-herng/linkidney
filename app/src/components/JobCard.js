import React from "react";
import Card from "react-bootstrap/Card";

const JobCard = ({ job }) => {
  return (
    <Card>
      <Card.Img variant="top" src={job.company.image} />
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>{job.description}</Card.Text>
      </Card.Body>
      <Card.Footer>Posted on {job.postedOn}</Card.Footer>
    </Card>
  );
};

export default JobCard;
