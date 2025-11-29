import "./Explore.css";

export default function Culture() {
  return (
    <div className="explore-container">
      <h1>Culture & Heritage</h1>
      <p className="explore-sub">Experience traditions, art, architecture & stories.</p>

      <div className="explore-grid">

        <div className="explore-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvzute7Q4mul0hTKuHvaKgD_Y3-Bz4jQK4A&s" alt="" />
          <h3>Temple Architecture</h3>
          <p>Traditional carvings that represent centuries of craftsmanship.</p>
        </div>

        <div className="explore-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKp8uhPZx8rIV2VcSN-RoLWCzbPjpL3iK_kw&s" alt="" />
          <h3>Folk Dance</h3>
          <p>Vibrant performances filled with energy and storytelling.</p>
        </div>

      </div>
    </div>
  );
}
