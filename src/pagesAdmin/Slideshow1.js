import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Slideshow1.css';


const slideImages = [
  {
    url:
      "Image/Slideshow1.png", 
  },
  {
    url:
      "Image/Slideshow2.png",
  },
  {
    url:
      "Image/Slideshow3.png",
  }
];

const Slideshow1 = () => {
  return (
    <div className="slide-container" >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>     
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow1;