import React, { useState, useEffect } from 'react';
import './Loading.css'; // Add CSS for styling

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Set timeout for 4 seconds

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  return (
    <div className={`loading ${isVisible ? 'visible' : 'hidden'}`}>
      <p>Justice Companion App will provide you free legal aid or any assistance with the police</p>
      <p>न्याय साथी ऐप आपको मुफ्त कानूनी सहायता प्रदान करेगा।</p>
    </div>
  );
};

export default Loading;
