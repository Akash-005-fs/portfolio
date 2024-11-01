import React, { useEffect, useRef } from 'react';
import './App.css'; // assuming this is where your CSS is located

const LastVideo = () => {
  const videoContainer = useRef(null);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = "../videos/original-faa40e9fae5ceb3cfa9cd34cd2f26629.mp4"; // Update with your correct video path
    videoElement.autoPlay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.controls = true;
    videoElement.style.objectFit = 'cover';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';

    // Append the video element to the div with id='lv'
    if (videoContainer.current) {
      videoContainer.current.appendChild(videoElement);
    }
  }, []);

  return (
    <div className='lastv'>
      <div className='lastvin'>
        <div id='lv' ref={videoContainer}></div>
      </div>
    </div>
  );
};

export default LastVideo;
