import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="Bg"
      style={{
        backgroundColor: "#162447",
        color: "#fff",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="content-1">
        <h2>RENT</h2>
        <h1>BOOK</h1>
        <p>
          Want to read a new book but out of money?? Say no more... we are here
          to help you find your next reading adventure in a cheaper price...
        </p>

        <p>Take a survey and find some recommendation</p>
        <Link to="/questions">
          <Button className="btn" variant="primary">
            Start Here
          </Button>
        </Link>
      </div>
      <div className="content-2 "></div>
    </div>
  );
};

export default Home;
