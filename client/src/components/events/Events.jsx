import React, { useState } from 'react';
import './event.css'

const Marquee = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="marquee"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p style={{ animation: `scrolling-text ${isHovering ? 'paused' : '20s'} linear infinite` }}>
        This is some scrolling text
      </p>
    </div>
  );
}

export default Marquee;
