import React, { useState } from 'react';
import './gallery.css'
// import GalleryData from "./GalleryData"
// import Alb1 from "../../Assests/album/CCA 2019/album1.jpg"

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    { id: 1, src: "./images/indd8.jpg", alt: 'image 1' },
    { id: 2, src: "./images/indd3.jpg", alt: 'image 2' },
    { id: 3, src: "./images/indd1.jpg", alt: 'image 3' },
    { id: 4, src: "./images/indd6.jpg", alt: 'image 4' },
    { id: 5, src: "./images/indd9.jpg", alt: 'image 5' },
    { id: 6, src: "./images/indd6.jpg", alt: 'image 6' },
    { id: 7, src: "./images/indd6.jpg", alt: 'image 7' },
    { id: 8, src: "./images/indd10.jpg", alt: 'image 8' },
    { id: 9, src: "./images/indd4.jpg", alt: 'image 9' },
    { id: 10, src: "./images/indd2.jpg", alt: 'image 10'},
    { id: 11, src: "./images/indd5.jpg", alt: 'image 11'},
    { id: 12, src: "./images/indd7.jpg", alt: 'image 12'},
    // Add more images as needed
  ];

  const handleClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <section className='img-gallery'>
        <div className="gallery-head">
            <h2>Gallery</h2>
        </div>
    <div className="gallery">
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          onClick={() => handleClick(image)}
        />
      ))}
      {currentImage && (
        <div className="lightbox">
          <img src={currentImage.src} alt={currentImage.alt} />
          <button onClick={() => setCurrentImage(null)} className="gallery-btn">Close</button>
        </div>
      )}
    </div>

    <div className="gallery-more">
        <a href="#" className='btn'>See More</a>
    </div>
    </section>
  );
};

export default Gallery;
