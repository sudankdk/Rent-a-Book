import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Navbar";
import "./App.css";
import Home from "./Component/Home";
import Questions from "./Component/Questions";
import Direct from "./Component/Direct";
import SignUp from "./Component/signup";
import Login from "./Component/Login";
import Loader from "./Component/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/result" element={<Direct />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
