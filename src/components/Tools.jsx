import React from 'react';
import "../styles/tools.css";

function Tools() {
  return (
    <div className="backwrap">
      <div className="back">
        {/* Duplicated content for infinite scroll effect */}
        <div className="scroll-content">
        <div className="bt"><h2>🔸HTML🔸</h2></div>
          <div className="bt"><h2>🔸CSS🔸</h2></div>
          <div className="bt"><h2>🔸JAVASCRIPT🔸</h2></div>
          <div className="bt"><h2>🔸REACT🔸</h2></div>
          <div className="bt"><h2>🔸DJANGO🔸</h2></div>
          <div className="bt"><h2>🔸MYSQL🔸</h2></div>
          <div className="bt"><h2>🔸MONGODB🔸</h2></div>
          <div className="bt"><h2>🔸OOP🔸</h2></div>

          {/* Duplicate the items for seamless looping */}
    
          <div className="bt"><h2>🔸HTML🔸</h2></div>
          <div className="bt"><h2>🔸CSS🔸</h2></div>
          <div className="bt"><h2>🔸JAVASCRIPT🔸</h2></div>
          <div className="bt"><h2>🔸REACT🔸</h2></div>
          <div className="bt"><h2>🔸DJANGO🔸</h2></div>
          <div className="bt"><h2>🔸MYSQL🔸</h2></div>
          <div className="bt"><h2>🔸MONGODB🔸</h2></div>
          <div className="bt"><h2>🔸OOP🔸</h2></div>
          
        
        </div>
      </div>
    </div>
  );
}

export default Tools;
