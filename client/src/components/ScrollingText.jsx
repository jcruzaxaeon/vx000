


// SCROLLING TEXT - REACT COMPONENT
// ./client/src/components/ScrollingText.jsx 
// VC3

import React, { useEffect, useRef, useState } from 'react';
import '../styles/normalize.css';
import '../styles/global.css';

const ScrollingText = ({ text, index, speed = 100 }) => {
  const [positions, setPositions] = useState([0, 0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [hasCompletedFirstLap, setHasCompletedFirstLap] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    let textWidth = scrollRef.current?.offsetWidth || 0;
    let containerWidth = containerRef.current?.offsetWidth || 0;

    setPositions([0, textWidth, 2 * textWidth]);

    const fps = 60;
    const pixelsPerFrame = speed / fps;
    const initialDelay = (index + 1) * 2000;

    const timer = setTimeout(() => {
      startScrolling(pixelsPerFrame, textWidth);
    }, initialDelay);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, [index, speed]);

  const startScrolling = (pixelsPerFrame, textWidth) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setPositions((prev) => {
        let completedLap = false;
        const updated = prev.map((pos, i) => {
          const newPos = pos - pixelsPerFrame;
          if (newPos <= -textWidth && !hasCompletedFirstLap) {
            completedLap = true;
            return prev[(i + 2) % 3] + textWidth; // Use the position of the instance two steps ahead
          }
          return newPos < -textWidth ? prev[(i + 2) % 3] + textWidth : newPos;
        });

        if (completedLap) {
          setHasCompletedFirstLap(true);
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsPaused(true);

          setTimeout(() => {
            setIsPaused(false);
            startScrolling(pixelsPerFrame, textWidth);
          }, 2000);

          return updated;
        }

        return updated;
      });
    }, 1000 / 60);
  };

  const toggleScroll = () => {
    if (isPaused) {
      setIsPaused(false);
      let textWidth = scrollRef.current?.offsetWidth || 0;
      const pixelsPerFrame = speed / 60;
      startScrolling(pixelsPerFrame, textWidth);
    } else {
      setIsPaused(true);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <div className="scroll-container" ref={containerRef}>
        {positions.map((pos, i) => (
          <div
            key={i}
            className="scroll-text"
            ref={i === 0 ? scrollRef : null}
            style={{ transform: `translateX(${pos}px)` }}
          >
            {`${text} \u00A0\u00A0\u00A0\u00A0`}
          </div>
        ))}
      </div>
      <button onClick={toggleScroll}>
        {isPaused ? 'Resume' : 'Pause'} Scrolling
      </button>
    </div>
  );
};

export default ScrollingText;


