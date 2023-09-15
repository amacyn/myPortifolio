import React, { useState, useEffect } from 'react';
import '/Users/Amarachi/portifolio/src/Index.css';

const images = [ '/src/Componets/Right/Secondhalf/img_1.png', '/src/Componets/Right/Secondhalf/img.png'];

function Image() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img
        className="slider-image"
        src={`${images[currentImageIndex]}`}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
   );
}

export default Image;