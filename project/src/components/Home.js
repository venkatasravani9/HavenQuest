import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="home">
      {/* Overlay content area */}
      <div className="overlay">

        {/* Dynamic Welcome */}
        <h1>
          Welcome {user ? user.name : "Traveler"}!
        </h1>

        {/* Inspiring line — tourism-focused */}
        <p>
          Discover breathtaking places, hidden local gems, and unforgettable cultural experiences.
        </p>

        {/* Buttons */}
        <div className="buttons">
          {/* Explore inner page */}
          <Link to="/explore">
            <button className="explore-btn">Explore Now</button>
          </Link>

          {/* Optional contact button (uses your existing style) */}
          <Link to="/contact">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
