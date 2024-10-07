
// ./client/src/components/Ring.jsx 
// VA1

import React, { useEffect, useState } from 'react';
import '../styles/normalize.css';
import '../styles/global.css';

const Ring = ({ text, index }) => {
  const [startScrolling, setStartScrolling] = useState(false);

  useEffect(() => {
    // Start scrolling after an initial delay based on the index
    const delay = (index + 1) * 5000; // 5 seconds per index
    const timer = setTimeout(() => setStartScrolling(true), delay);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="scroll-container">
      <div className={`scroll-text ${startScrolling ? "animate" : ""}`}>
        {text}&nbsp;&nbsp;&nbsp;&nbsp;{/* Adds some spacing */}
        {text} {/* Repeats the text for smooth wrapping */}
      </div>
    </div>
  );
};

export default Ring;

