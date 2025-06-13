import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "electronic.png",
  "etnicad.png",
  "fashionad.png"
];

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true // set true if you want arrows
  };

  return (
    <div style={{ width: "1200px", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              style={{ width: "100%", height: "auto" }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
