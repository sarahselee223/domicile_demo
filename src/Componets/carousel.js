import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chroma from '../Images/chroma.jpg'
import marina from '../Images/marina.jpg'
import mark from '../Images/mark.jpg'
import videoImage from '../Images/videoImage.png'

const CarouselItem = () => {
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true} stopOnHover={true} showThums={true} className='carouselContainer' infiniteLoop={true}>
                <div>
                    <img src={chroma} alt="chroma" />
                </div>
                <div>
                    <img src={marina} alt="marina" />
                </div>
                <div>
                    <img src={mark} alt="mark" />
                </div>
                <div className="videoSlide">
                    <div className="embedContainer">
                        <iframe src="https://player.vimeo.com/video/236833535" frameborder="0" title="domicileExperience" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <img src={videoImage} alt="videoImage" />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselItem