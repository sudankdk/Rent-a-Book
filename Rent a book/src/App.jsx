import NavBar from "./Component/Navbar";
import "./App.css";
import Home from "./Component/Home";
import Questions from "./Component/Questions";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Questions />
      </div>
    </>
  );
}

export default App;
