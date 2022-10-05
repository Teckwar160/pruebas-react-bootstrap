import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bandera1 from "../Pages/Bandera1";
import Bandera2 from "../Pages/Bandera2";
import Home from "../Pages/Home";
import MyNavBar from "../Components/NavBar/MyNavBar"

export default function AppRouters() {
  return (
    <Router>
      <MyNavBar />

      <Routes>
        <Route exact path="/Bandera1" element={<Bandera1 />} />
        <Route exact path="/Bandera2" element={<Bandera2 />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
