import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Services from "./components/homeComponents/Services";
import SingleProduct from "./SingleProduct";

function App() {
  return (
    <div className="App ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
