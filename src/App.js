import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
