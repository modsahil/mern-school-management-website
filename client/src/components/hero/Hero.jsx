import React from "react";

import './hero.css'
import DAV1 from '../../Assests/davu1.jpg'
// import Slider from './Slider'
// import './slider.css'


const Hero = () => {
    return (
        <header>
            <div className="container container__header">
                <div className="overlay"></div>
                <div className="header__left">

                    <h2>DAV PUBLIC SCHOOL <span>SAWANG</span></h2>
                    <p>DAV College Managing Committee is the largest non-government organization in the field of education in India today.</p>

                    <a href="#" className="btn">Know More</a>
                </div>
            </div>

        </header>
    )
}


export default Hero