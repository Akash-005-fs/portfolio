import React, { useState, useEffect } from 'react';
import '../styles/loading.css'; // Import the updated CSS for the loading animation
import logo from '../Akash_Pradeep__2_-removebg-preview.png'; // Import your logo file (replace with your actual logo path)

const Loading = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          setFadeOut(true); // Trigger the fade-out effect
          setTimeout(() => {
            onComplete(); // Call the callback after the fade-out is complete
          }, 1000); // Allow time for the fade-out transition
          return prevCount;
        }
      });
    }, 40); // Set time to about 4 seconds (40 ms * 100 = 4000 ms)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <img
        src={logo}
        alt="Logo"
        className={`loading-logo ${fadeOut ? 'fade-out' : ''}`} // Apply fade-out class when loading completes
      />
      <div className="loading-text">{count}%</div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${count}%` }} // Dynamically set the width based on count
        ></div>
      </div>
    </div>
  );
};

export default Loading;
