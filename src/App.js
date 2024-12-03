import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Start from "./Pages/Home.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/menu" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
