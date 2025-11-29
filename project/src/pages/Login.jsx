import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localhost:5000/users");
    const users = res.data;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("auth", "true");
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
