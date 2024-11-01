import React from 'react';
import './App.css'; // Assuming the CSS is saved as App.css

const ViewableResume = () => {
  return (
    <li>
      <a
        href="/documents/05-Akash Pradeep.pdf" // Correct path relative to the public directory
        target="_blank"
        rel="noopener noreferrer"
        className="view-button"
      >
        Resume
        <span className="material-symbols-outlined">arrow_outward</span>
      </a>
    </li>
  );
};

export default ViewableResume;
