import { useState } from "react";
import { registerUser } from "../api/user";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    is_admin: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form); // No double alerts
      console.log("User registered:", res.data);
      alert("Registration successful!");
    } catch (err) {
      console.error("Error details:", err);
      const errorMsg = err.response?.data?.errors
        ? Object.values(err.response.data.errors).flat().join(", ")
        : err.message || "Something went wrong";
      alert(errorMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
