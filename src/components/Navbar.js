import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ toggleTheme, handleLogout }) => {
  const categories = ["Action", "Drama", "Comedy", "Horror", "Romance"];

  return (
    <div className="navbar">
      <div className="categories">
        {categories.map((category) => (
          <Link key={category} to={`/category/${category}`} className="category-link">
            {category}
          </Link>
        ))}
      </div>
      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-toggle">
          🌙
        </button>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
