import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome back, {user.name}!</h3>
      <img 
        src={user.photo} 
        alt="Profile" 
        style={{ width: "120px", borderRadius: "50%" }} 
      />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
