import React, { useState } from "react";
import "./Home.css";

export default function App() {
  const [showOptions, setShowOptions] = useState({});

  const toggleOptions = (index) => {
    setShowOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <header>
        <div className="logo">📒 Notes App</div>
        <button className="settings">⚙ Settings</button>
      </header>

      <div className="container">
        <div className="welcome">My Notebooks</div>
        <div className="description">Your personal place to create and manage notes.</div>

        <div className="filters">
          <button>All</button>
          <button>Recent</button>
        </div>

        <div className="notes">
          <div className="add-note">+</div>

          {["Notebook 1", "Notebook 2"].map((title, index) => (
            <div
              key={index}
              className={`note ${showOptions[index] ? "show-options" : ""}`}
            >
              <h3>{title}</h3>
              <button className="more-btn" onClick={() => toggleOptions(index)}>
                ⋮
              </button>
              <div className="note-options">
                <span>Edit</span>
                <span>Share</span>
                <span>Delete</span>
                <span>Download</span>
                <span>Duplicate</span>
                <span>Archive</span>
                <span>Pin</span>
              </div>
            </div>
          ))}
        </div>

        <div className="three-columns">
          <div className="column-card">
            <h3>⚡ Quick Actions</h3>
            <p>Create, import, or organize your notes instantly.</p>
          </div>
          <div className="column-card">
            <h3>📊 Recent Activity</h3>
            <p>Track your last edits, shares, and downloads.</p>
          </div>
          <div className="column-card">
            <h3>💡 Tips & Guides</h3>
            <p>Learn how to use Notes App effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
