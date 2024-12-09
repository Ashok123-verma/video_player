import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VideoGrid from "./components/VideoGrid";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // User authentication state
  const [theme, setTheme] = useState("dark"); // Theme state
  const [lastVisitedCategory, setLastVisitedCategory] = useState("Action"); // Store the last visited category

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Toggle theme
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Set user as authenticated
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set user as logged out
  };

  useEffect(() => {
    // On page load, if authenticated, redirect to the last visited category
    if (isAuthenticated) {
      setLastVisitedCategory(localStorage.getItem('lastVisitedCategory') || 'Action');
    }
  }, [isAuthenticated]);

  // Save last visited category to local storage when the category changes
  const updateLastVisitedCategory = (category) => {
    setLastVisitedCategory(category);
    localStorage.setItem('lastVisitedCategory', category);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Redirect to category page if authenticated, otherwise show login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to={`/category/${lastVisitedCategory}`} replace />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        {/* Video grid by category */}
        <Route
          path="/category/:category"
          element={
            isAuthenticated ? (
              <VideoGrid updateLastVisitedCategory={updateLastVisitedCategory} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        {/* Video player */}
        <Route
          path="/player/:id"
          element={
            isAuthenticated ? <VideoPlayer /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </div>
  );
};

// Wrap App with Router to provide routing context
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
