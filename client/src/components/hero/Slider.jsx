import React, { useDeferredValue } from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import DAV1 from '../../Assests/davu1.jpg'
import DAV2 from '../../Assests/davu2.jpg'
import DAV3 from '../../Assests/davu3.jpg'
import './slider.css'





const Slider = () => {
    return(
        <ImageSlider className='slider' effectDelay={500} autoPlayDelay={2000}>
        <Slide className='slider-slide'>
          <img alt="img2" src={DAV1} />
        </Slide>
        <Slide className='slider-slide'>
          <img alt="img2" src={DAV2} />
        </Slide>
        <Slide className='slider-slide'>
          <img alt="img1" src={DAV3} />
        </Slide>
      </ImageSlider>
    )
}



export default Slider