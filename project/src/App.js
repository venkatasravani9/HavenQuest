import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggler from "./components/ThemeToggler";
import Explore from "./pages/Explore";
import Destinations from "./pages/Destinations";
import Food from "./pages/Food";
import Culture from "./pages/Culture";
import Nature from "./pages/Nature";
import Festivals from "./pages/Festivals";
import TravelTips from "./pages/TravelTips";
import Gallery from "./pages/Gallery";

import Guides from "./pages/Guides";
import GuideProfile from "./pages/GuideProfile";


import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />

        <div style={{ marginTop: "80px", padding: "20px" }}>
          <ThemeToggler />

          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/food" element={<Food />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guide/:id" element={<GuideProfile />} />

            {/* First time registration */}
            <Route path="/register" element={<Register />} />

            {/* Private page: only after registration */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
