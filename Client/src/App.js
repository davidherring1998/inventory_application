import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
