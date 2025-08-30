import React, { useState, useEffect, useRef } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [showSource, setShowSource] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <a>🏠 Home</a>
        <a>💬 New Chat</a>

        <button onClick={() => setShowSource(!showSource)}>📂 Source</button>
        {showSource && (
          <div className="submenu">
            <input type="text" placeholder="🔍 Search source..." />
            <button onClick={() => document.getElementById("file-upload").click()}>
              ⬆ Upload
            </button>
          </div>
        )}

        <button onClick={() => setShowHistory(!showHistory)}>📜 History</button>
        {showHistory && (
          <div className="submenu">
            <input type="text" placeholder="🔍 Search history..." />
          </div>
        )}
      </div>

      <div className="main">
        <div className="center-col">
          <div ref={dropdownRef}>
            <button className="more-btn" onClick={() => setShowDropdown(!showDropdown)}>⋮</button>
            {showDropdown && (
              <div className="dropdown">
                <span>🔗 Share</span>
                <span>💾 Save</span>
                <span>🗑 Delete</span>
                <span>✏ Rename</span>
              </div>
            )}
          </div>

          <div className="topic-card">
            <h3 className="topic-title">Topic</h3>
          </div>
        </div>
      </div>

      <div className="right-col">
        <input type="text" className="search-bar" placeholder="🔍 Search..." />
        <div className="widget">📑 Flashcards</div>
        <div className="widget">❓ Quiz</div>
        <div className="widget">📘 Tutorial</div>
        <div className="widget">📊 Grade Graph</div>
        <div className="widget">✨ Recommendations</div>
      </div>

      <div className="chat-input">
        <textarea rows="1" placeholder="Type a message or upload a file..."></textarea>
        <label htmlFor="file-upload" className="upload-label">📎 Upload</label>
        <input id="file-upload" type="file" accept=".jpg,.png,.pdf,.ppt,.docx" />
      </div>
    </div>
  );
}
