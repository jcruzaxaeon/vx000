

import React, { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/global.css';

const TextCarousel = ({ text, speed = 15000 }) => {
  const [items, setItems] = useState([text, text, text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems => {
        const newItems = [...prevItems];
        newItems.push(newItems.shift());
        return newItems;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="carousel-container">
      <div className="carousel-content" style={{ animationDuration: `${speed}ms` }}>
        {items.map((item, index) => (
          <span key={index} className="carousel-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;

/*
  .carousel-container {
    position: relative;
    height: 4rem;
    overflow: hidden;
  }
  
  .carousel-content {
    position: absolute;
    display: flex;
    width: 100%;
    animation: scroll-right 15s linear infinite;
  }
  
  .carousel-item {
    margin: 0 1rem;
    white-space: nowrap;
  }
  
  @keyframes scroll-right {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
*/