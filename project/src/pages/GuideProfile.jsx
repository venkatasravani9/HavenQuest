import { useParams } from "react-router-dom";
import "./Explore.css";

export default function GuideProfile() {
  const { id } = useParams();

  const guideData = {
    1: {
      name: "Ramesh Kumar",
      experience: "8 Years",
      languages: "English, Telugu, Hindi",
      bio: "Ramesh is an expert in historical monuments, temples, and local stories.",
      price: "₹1200 per day",
      photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
    },
    2: {
      name: "Ananya Sharma",
      experience: "5 Years",
      languages: "English, Telugu",
      bio: "Ananya specializes in cultural walks and food discovery tours.",
      price: "₹900 per day",
      photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    }
  };

  const guide = guideData[id];

  return (
    <div className="explore-container">
      <h1>{guide.name}</h1>
      <img src={guide.photo} alt={guide.name} style={{ width: "200px", borderRadius: "12px" }} />

      <p><strong>Experience:</strong> {guide.experience}</p>
      <p><strong>Languages:</strong> {guide.languages}</p>
      <p><strong>About:</strong> {guide.bio}</p>
      <p><strong>Price:</strong> {guide.price}</p>

      <button style={{
        padding: "12px 20px",
        background: "#ff7f50",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "15px"
      }}>
        Request Booking
      </button>
    </div>
  );
}
