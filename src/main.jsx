import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FundraiserPage from "./pages/FundraiserPage";
import DogProfilePage from "./pages/DogProfilePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fundraisers" element={<FundraiserPage />} />
        <Route path="/fundraisers/:id" element={<DogProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);