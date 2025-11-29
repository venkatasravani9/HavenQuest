import "./Explore.css";

export default function Nature() {
  return (
    <div className="explore-container">
      <h1>Nature Trails</h1>
      <p className="explore-sub">Peaceful escapes into nature.</p>

      <div className="explore-grid">

        <div className="explore-card">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="" />
          <h3>Waterfall Trek</h3>
          <p>Follow the trail to a calm and refreshing waterfall.</p>
        </div>

        <div className="explore-card">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="" />
          <h3>Forest Walk</h3>
          <p>Breathe fresh air while exploring the green forest trails.</p>
        </div>

      </div>
    </div>
  );
}
