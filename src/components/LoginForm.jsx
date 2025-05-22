import { useState } from "react";
import { loginUser } from "../api/user"; // adjust path as needed

function Login() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form); //API caller
      console.log("Login successful:", res.data);
      alert("Login successful!");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your name and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
