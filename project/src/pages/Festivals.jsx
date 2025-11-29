import "./Explore.css";

export default function Festivals() {
  return (
    <div className="explore-container">
      <h1>Festivals</h1>
      <p className="explore-sub">
        Colorful celebrations full of joy, culture, music, and tradition.
      </p>

      <div className="explore-grid">

        {/* Holi Festival */}
        <div className="explore-card">
          <img
            src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
            alt="Holi Festival"
          />
          <h3>Holi – Festival of Colors</h3>
          <p>
            People celebrate with vibrant colors, dance, sweets, and joyful gatherings.
          </p>
        </div>

        {/* Diwali Festival */}
        <div className="explore-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XF7OiScVsqBS3PIznKlsJxIq7Rv2MholFA&s"
            alt="Diwali"
          />
          <h3>Diwali – Festival of Lights</h3>
          <p>
            Homes and streets glow with lamps, fireworks, sweets, and prayers.
          </p>
        </div>

        {/* Traditional Cultural Festival */}
        <div className="explore-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5HwWMVDoWqMj6eagkVz7MEfsU-tkDiPXzw&s"
            alt="Traditional Dance"
          />
          <h3>Cultural Dance Festival</h3>
          <p>
            Classical dance performances celebrating culture, rhythm, and tradition.
          </p>
        </div>

        {/* Harvest Festival (Pongal / Sankranti / Onam) */}
        <div className="explore-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS181kbFn8kYmapc0AH3Q4ceXqcJ5AXxa9PKw&s"
            alt="Harvest Festival"
          />
          <h3>Harvest Festival</h3>
          <p>
            A joyful celebration of harvest, thanksgiving, local food, folk rituals, and community gatherings.
          </p>
        </div>

      </div>
    </div>
  );
}
