import React, { useState, useEffect } from 'react';
import '../../../Index.css';
import '../../../App.css';

const images = [ '../Images/img1.png', '../Images/img.png'];

function Image() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image_slider">
      <img
        className="slider_image"
        src={`${images[currentImageIndex]}`}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
   );
}

export default Image;