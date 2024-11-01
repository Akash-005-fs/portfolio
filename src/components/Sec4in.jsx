import React, { useState, useEffect } from 'react';
import '../styles/Sec4.css'; // Importing the CSS for animations and effects
// import ShaderEffect from './ShaderEffect';
const words = ['Craft', 'Elevate', 'Inspire', 'Lead'];

const Sec4in = () => {
  const [currentWord, setCurrentWord] = useState(0);

  // Cycle through words every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (


<div className='mast'>

<div className='back1'>

{/* <ShaderEffect></ShaderEffect> */}









</div>

    <section className="sec4-container">
      <div className="word-box">
        <h1 className="animated-word" data-text={words[currentWord]}>
          {words[currentWord]}
        </h1>
      </div>
    </section>


</div>


  );
};

export default Sec4in;
