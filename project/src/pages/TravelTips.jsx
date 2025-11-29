import "./Explore.css";

export default function TravelTips() {
  return (
    <div className="explore-container">
      <h1>Travel Tips</h1>
      <p className="explore-sub">Smart tips for safe and enjoyable travel.</p>

      <ul style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
        <li>✔ Carry a reusable water bottle</li>
        <li>✔ Wear comfortable shoes</li>
        <li>✔ Travel during early mornings</li>
        <li>✔ Carry cash for local shops</li>
        <li>✔ Respect local culture & dress modestly</li>
      </ul>

    </div>
  );
}
