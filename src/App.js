import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MapSearch from "./components/MapSearch";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import PropertyPage from "./pages/PropertyPage";
import Login from "./components/Login";
import Listing from "./components/Listing";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/property/:id" element={<PropertyPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/map-search" element={<MapSearch />} />
        <Route path="/listing" element={<Listing />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
