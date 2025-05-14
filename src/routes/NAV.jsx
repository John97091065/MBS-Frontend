import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/aboutme" style={{ marginRight: "10px" }}>About me</Link>
        <Link to="/blog" style={{ marginRight: "10px" }}>Blog</Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
        {/* <Link to="/register" style={{ marginRight: "10px" }}>Register</Link> */}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
