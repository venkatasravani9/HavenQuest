import { Link } from "react-router-dom";
import "./Explore.css";

export default function Explore() {
  return (
    <div className="explore-container">

      <h1>Explore Local Tourism</h1>
      <p className="explore-sub">
        Dive deep into destinations, culture, food, festivals, and everything that makes travel unforgettable.
      </p>

      <div className="explore-grid">

        <Link to="/destinations" className="explore-card">
          <div>
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" alt="" />
            <h3>Top Destinations</h3>
            <p>Discover scenic viewpoints, historic places, and must-visit attractions.</p>
          </div>
        </Link>

        <Link to="/food" className="explore-card">
          <div>
            <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba" alt="" />
            <h3>Local Food & Cuisine</h3>
            <p>Explore authentic flavors and unique local dishes.</p>
          </div>
        </Link>

        <Link to="/culture" className="explore-card">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLY98GXbCJeVSn1Cw511fWL-sO_EFLBgFelFncI9okw5ualI_hgI38x4&s"
              alt=""
            />
            <h3>Culture & Heritage</h3>
            <p>Traditional arts, monuments, history, and stories of the region.</p>
          </div>
        </Link>

        <Link to="/nature" className="explore-card">
          <div>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="" />
            <h3>Nature Trails</h3>
            <p>Waterfalls, mountain treks, nature parks, and peaceful escapes.</p>
          </div>
        </Link>

        <Link to="/festivals" className="explore-card">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQgxqbzC8PiC1H2jFpj6r70ngo2Vv6XMF5A&s" alt="" />
            <h3>Festivals</h3>
            <p>Local celebrations filled with color, music, art, and tradition.</p>
          </div>
        </Link>

        <Link to="/travel-tips" className="explore-card">
          <div>
            <img src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f" alt="" />
            <h3>Travel Tips</h3>
            <p>Plan your trip with safety tips, packing lists, and best travel seasons.</p>
          </div>
        </Link>

        <Link to="/gallery" className="explore-card">
          <div>
            <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7" alt="" />
            <h3>Photo Gallery</h3>
            <p>A visual journey through stunning landscapes and cultural moments.</p>
          </div>
        </Link>

        {/* ⭐⭐ NEW CARD HERE — Tour Guides ⭐⭐ */}
        <Link to="/guides" className="explore-card">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Tour Guides"
            />
            <h3>Tour Guides</h3>
            <p>Book trusted and experienced guides for your journey.</p>
          </div>
        </Link>

      </div>

    </div>
  );
}
