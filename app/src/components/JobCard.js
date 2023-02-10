import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JobCard = ({ job }) => {
  return (
    <Card>
      <Card.Img variant="top" src={job.company.image} />
      <Card.Body>
        <Card.Title>
          {job.title}{" "}
          {job.salary && <Badge bg="info">{"$" + job.salary}</Badge>}
        </Card.Title>
        <Card.Text>{job.description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ position: "relative" }}>
        Posted on {job.postedOn}{" "}
        <Button
          variant="outline-success"
          size="sm"
          style={{ position: "absolute", right: "0" }}
        >
          Apply
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default JobCard;
