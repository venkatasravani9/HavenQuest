import React, { useState } from "react";
import "./About.css";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    experience: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert(
      "Thank you for enrolling! Your guide profile will be reviewed within 2-3 days."
    );
    setFormData({ name: "", email: "", specialization: "", experience: "" });
  };

  return (
    <div className="about-page">
      <div className="about-content">
        {/* Left Section: Info and Images */}
        <div className="about-info">
          <h1>About HavenQuest</h1>
          <p>
            HavenQuest is your trusted companion for exploring the hidden gems
            of local destinations. We focus on sustainable and cultural tourism,
            empowering travelers to experience authentic places guided by local
            experts.
          </p>
          <p>
            Our platform connects travelers with professional and passionate
            guides who bring local stories to life — whether it's trekking in
            lush hills, visiting ancient temples, or exploring street markets.
          </p>
          <p>
            Every guide undergoes a verification process to ensure safety and
            quality service. Based on user preferences and trip type, we
            allocate the best available guide within 2-3 days.
          </p>

          <div className="image-grid">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Mountain Trail"
            />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Local Market"
            />
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              alt="Cultural Dance"
            />
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
              alt="Temple Tour"
            />
          </div>
        </div>

        {/* Right Section: Guide Enrollment Form */}
        <div className="guide-form">
          <h2>Become a Local Guide</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization (e.g., Trekking, Heritage, Food Tours)"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="experience"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
              <button type="submit">Enroll Now</button>
            </form>
          ) : (
            <p className="success-msg">
              ✅ Thank you for registering! We'll contact you soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
