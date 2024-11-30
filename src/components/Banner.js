import React, { useState, useEffect } from "react"; // Keep only this import
import "./Banner.css"; // CSS import remains

const Banner = () => {
  const banners = [
    "photos/ban-img.jpeg", // High-quality images
    "photos/ban-img2.jpeg",
    "photos/ban-img3.jpeg",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length); // Rotate banners every 3 seconds
    },3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="banner">
      <button className="arrow left" onClick={prevBanner}>
        &lt;
      </button>

      <img
        src={banners[currentBanner]} // Display the active banner
        alt="Promo Banner"
        loading="lazy" // Lazy loading for better performance
        width="100%"  // Make image responsive
      />

      <button className="arrow right" onClick={nextBanner}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
