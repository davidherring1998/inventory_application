import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
