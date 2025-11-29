// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = { email };
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">HavenQuest</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {!user ? (
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Login / Sign Up
          </button>
        ) : (
          <div className="user-info">
            <span className="user-email">{user.email}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>

      {/* ✅ Login Modal */}
      {showLogin && (
        <div className="login-overlay">
          <div className="login-box">
            <h2>Login to HavenQuest</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-submit-btn">
                Login
              </button>
            </form>
            <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
