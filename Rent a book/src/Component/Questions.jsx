import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

const Questions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [num, setNum] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "Dhaka", "Bangladesh", "Chittagong"],
    },
    {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "kaka", "Bangladesh", "Chittagong"],
    },
    {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "Dhaka", "Bangladesh", "Chittagong"],
    },
    {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "Dhaka", "Bangladesh", "Chittagong"],
    },
    {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "Dhaka", "Bangladesh", "Chittagong"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setNum(((currentQuestionIndex + 1) / questions.length) * 100);
        setSelectedOption("");
        setIsSubmitted(false);
      } else {
        setNum(((currentQuestionIndex + 1) / questions.length) * 100);
        alert("Thank you");
      }
    }, 500);
  };

  const { question, options } = questions[currentQuestionIndex];

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
