import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

const Questions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [num, setNum] = useState(0); // Adding state for progress bar

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setNum(100);
  };

  const question = "What is the capital of France?";
  const options = ["Berlin", "Madrid", "Paris", "Rome"];
  const question = "What is the capital of France?";
  const options = ["Berlin", "Madrid", "Paris", "Rome"];
  const question = "What is the capital of France?";
  const options = ["Berlin", "Madrid", "Paris", "Rome"];
  const question = "What is the capital of France?";
  const options = ["Berlin", "Madrid", "Paris", "Rome"];

  return (
    <div>
      <ProgressBar now={num} />
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Form onSubmit={handleSubmit}>
            {options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                label={option}
                value={option}
                checked={selectedOption === option}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
            ))}
            <Button type="submit" variant="primary" disabled={isSubmitted}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Questions;
