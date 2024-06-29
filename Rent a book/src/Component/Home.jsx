import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Confused??</h1>
      <h2>which is your next book</h2>
      <Link to="/questions">
        <Button variant="primary">Let's Start</Button>
      </Link>
    </div>
  );
};

export default Home;
