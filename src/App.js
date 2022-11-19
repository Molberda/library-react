import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Books from "./Pages/Books";
import { books } from "./data.js"
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Books books={books} /> }/>
          <Route path="/books/:id" element={<BookInfo books={books}/> }/>
          <Route path="/cart" element={<Cart /> }/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

// MINUTE 1:17:18
