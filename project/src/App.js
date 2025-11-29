import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggler from "./components/ThemeToggler";

import Login from "./pages/Login";       // NEW
import Signup from "./pages/Signup";     // NEW
import ProtectedRoute from "./ProtectedRoute"; // NEW

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Push below navbar */}
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <ThemeToggler />

        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes (Require Login) */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/about" 
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/posts" 
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/contact" 
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
