import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Books from "./Pages/Books";
import { books } from "./data.js"
import BookInfo from "./Pages/BookInfo";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Books books={books} /> }/>
          <Route path="/books/1" element={<BookInfo books={books}/> }/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

// MINUTE 1:17:18
