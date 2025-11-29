// Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Welcome to HavenQuest</h1>
        <p>Your travel companion for exploring hidden gems around the world.</p>
        <div className="buttons">
          <button className="explore-btn">Explore Now</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
