import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chroma from '../Images/chroma.jpg'
import marina from '../Images/marina.jpg'
import mark from '../Images/mark.jpg'

const CarouselItem = () => {
    return (
        <Carousel showArrows={true} autoPlay infiniteLoop>
        <div>
            <img src={chroma} alt="chroma" />
            <p className="chroma">Chroma</p>
        </div>
        <div>
            <img src={marina} alt="marina" />
            <p className="marina">Marina</p>
        </div>
        <div>
            <img src={mark} alt="mark" />
            <p className="mark">Mark</p>
        </div>
    </Carousel>
    )
}

export default CarouselItem