import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./Register.css"; // You'll create this stylesheet next

export default function Register() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    photo: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Save to backend JSON server
    await axios.post("http://localhost:5001/users", form);

    // Save to local storage
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);

    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleRegister}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input
            name="photo"
            placeholder="Profile Photo URL"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
