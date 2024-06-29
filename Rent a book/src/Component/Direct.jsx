import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import downloadImage from "../assets/download.jpeg";
import { Link } from "react-router-dom";

const Direct = () => {
  const location = useLocation();
  const answers = location.state?.answers || [];

  return (
    <div>
      <Card style={{ width: "auto" }}>
        <Card.Img variant="top" src={downloadImage} />
        <Card.Body>
          <Card.Title>Here Are Your Results</Card.Title>
          <Card.Text>You answered {answers.length} questions.</Card.Text>
          <Card.Text>
            To see the complete result of your survey and better understand your
            taste, Please Login
          </Card.Text>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Direct;
