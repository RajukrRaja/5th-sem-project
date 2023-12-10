import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, );

  const slides = [
    { text: 'Content 1', imageUrl: 'https://www.unicef.org/sites/default/files/styles/media_large_image/public/Hero%20-%20Transforming%20Education%20%2811%29.jpg?itok=i9sL6uDd' },
    { text: 'Content 2', imageUrl: 'https://www.worldbank.org/content/dam/photos/780x439/2019/jan-1/edu-finance-nepal.PNG' },
    { text: 'Content 3', imageUrl: 'https://www.worldbank.org/content/dam/photos/780x439/2019/jul/ROSC-II_second.JPG' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
    { text: 'Content 3', imageUrl: 'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop-1024x576.jpg' },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container" >
      <button className="nav-button left" onClick={prevSlide}>
        &lt; Previous
      </button>
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        Next &gt;
      </button>
    </div>
  );
};

export default Slider;
