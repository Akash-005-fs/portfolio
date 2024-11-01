import React from 'react';
import '../App.css'; // Assuming the CSS is saved as App.css

const Resume = () => {
  return (
    <li>
      <a
        href="/AKASH-PRADEEP-resume.pdf" // Ensure the path is correct and points to the public directory
        download="AKASH-PRADEEP-resume.pdf" // This will set the file to download with this name
        target="_blank"
        rel="noopener noreferrer"
        className="view-button"
      >
        Download Resume
        <span className="material-symbols-outlined">arrow_outward</span>
      </a>
    </li>
  );
};

export default Resume;
