// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Login from "./pages/login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
