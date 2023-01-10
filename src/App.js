import React from 'react';
import { Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";

import './App.css';

import Home from "./pages/Home"
import ExerciesDetail from "./pages/ExerciesDetail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: "1488px"}}} m="auto">
      <Navbar />
      <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciesDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
