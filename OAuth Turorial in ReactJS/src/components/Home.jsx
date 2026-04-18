import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome Home 🎉</h1>
      <p className="home-subtitle">You are successfully logged in!</p>
      <button className="logout-btn">Logout</button>
    </div>
  );
};