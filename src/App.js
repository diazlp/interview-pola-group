import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
