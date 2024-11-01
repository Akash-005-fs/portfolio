import React from 'react';
import "../styles/skills.css";

function Skills() {
  return (
    <div className="backwrap">
      <div className="back">
        {/* Duplicated content for infinite scroll effect */}
        <div className="scroll-content">
          <div className="bs"><h2>🔸Front-End Development🔸</h2></div>
          <div className="bs"><h2>🔸UI UX Design🔸</h2></div>
          
          <div className="bs"><h2>🔸Algoritm Modelling🔸</h2></div>
          <div className="bs"><h2>🔸Scalable API🔸</h2></div>
          <div className="bs"><h2>🔸Prototyping🔸</h2></div>
          <div className="bs"><h2>🔸Brand Design🔸</h2></div>
          <div className="bs"><h2>🔸Logo Design🔸</h2></div>
          {/* Duplicate the items for seamless looping */}
  

          <div className="bs"><h2>🔸Front-End Development🔸</h2></div>
          <div className="bs"><h2>🔸UI UX Design🔸</h2></div>
          
          <div className="bs"><h2>🔸Algoritm Modelling🔸</h2></div>
          <div className="bs"><h2>🔸Scalable API🔸</h2></div>
          <div className="bs"><h2>🔸Prototyping🔸</h2></div>
          <div className="bs"><h2>🔸Brand Design🔸</h2></div>
          <div className="bs"><h2>🔸Logo Design🔸</h2></div>


        </div>
      </div>
    </div>
  );
}

export default Skills;
