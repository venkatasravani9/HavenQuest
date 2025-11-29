import "./Explore.css";
import { Link } from "react-router-dom";

export default function Guides() {
  const guides = [
    {
      id: 1,
      name: "Ramesh Kumar",
      experience: "8 Years",
      language: "English, Telugu, Hindi",
      photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      desc: "Specialist in heritage sites and local history."
    },
    {
      id: 2,
      name: "Ananya Sharma",
      experience: "5 Years",
      language: "English, Telugu",
      photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      desc: "Expert in food tours and cultural experiences."
    }
  ];

  return (
    <div className="explore-container">
      <h1>Meet Your Tour Guides</h1>
      <p className="explore-sub">Book experienced, friendly, and trustworthy guides for your journey.</p>

      <div className="explore-grid">
        {guides.map((guide) => (
          <Link to={`/guide/${guide.id}`} className="explore-card" key={guide.id}>
            <div>
              <img src={guide.photo} alt={guide.name} />
              <h3>{guide.name}</h3>
              <p>{guide.experience} Experience</p>
              <p>{guide.language}</p>
              <p>{guide.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
