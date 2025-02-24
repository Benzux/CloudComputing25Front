import { useState, useEffect } from 'react';

// Function for getting the width and height of the current viewport
// Inspiration taken from last semester's project, code found from: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

function getWindowSize() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export default function useWindowSize() {
    const [windowDimensions, setWindowSize] = useState(getWindowSize());
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }