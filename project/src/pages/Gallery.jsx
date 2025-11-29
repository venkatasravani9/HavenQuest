import "./Explore.css";

export default function Gallery() {
  return (
    <div className="explore-container">
      <h1>Travelers’ Photo Gallery</h1>
      <p className="explore-sub">Real moments captured by real explorers.</p>

      <div className="explore-grid">

        <img className="explore-card" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Mountain View" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" alt="Trekking" />

        <img className="explore-card" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach Sunset" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1507525428034-79e5e4e288ce" alt="Beach Walk" />

        <img className="explore-card" src="https://images.unsplash.com/photo-1530030459512-e2cd66c1a49a" alt="City Explorer" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1541855490-8c42d1f95a78" alt="City Street" />

        <img className="explore-card" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Local Food" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1523307730650-594bc63a7d5a" alt="Market Food" />

        <img className="explore-card" src="https://images.unsplash.com/photo-1475869568365-1f04530a6b3e" alt="Waterfall" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="Forest Trail" />

        <img className="explore-card" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" alt="Temple Visit" />
        <img className="explore-card" src="https://images.unsplash.com/photo-1558980394-0fe2e6e6e7d7" alt="Cultural Moment" />

      </div>

    </div>
  );
}
