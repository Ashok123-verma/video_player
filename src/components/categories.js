import React from "react";
import { Link } from "react-router-dom";
import "../styles/categories.css";

const categories = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link key={category} to={`/categories/${category}`} className="category-card">
            <h3>{category}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
