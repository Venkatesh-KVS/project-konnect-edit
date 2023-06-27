import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ErrorPage from "./components/requiredPages/ErrorPage";
import Footer from "./components/Footer";
import HomeCollection from "./components/HomeCollection";
import Services from "./components/Services";
import SingleProduct from "./SingleProduct";
import Packages from "./components/Packages";
import LocateClinic from "./components/LocateClinic";
import Tests from "./components/Tests";

function App() {
  return (
    <div className="App ">
      <Router basename="/project-konnect">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home-collection" element={<HomeCollection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/locate-clinic" element={<LocateClinic />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
