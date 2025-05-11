import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
