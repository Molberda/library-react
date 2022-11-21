import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Books from "./Pages/Books";
import { books } from "./data.js";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
     return item.id === book.id ? {...item, quantity: +quantity} : item
    }))
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}/>
          <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// MINUTE 1:56:03
