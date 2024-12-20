import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "../Assets/Image";
import "../Assets/Css/SpecialDish.css";

function SpecialDish() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered image

    const detailsArray = [
        { title: 'sushi', image: img.sushi },
        { title: 'donburi', image: img.donburi },
        { title: 'sashimi', image: img.sashmi },
        { title: 'momos', image: img.momo },
        { title: 'special momos', image: img.splmomos },
    ];

    const settings = {
        dots: false,
        infinite: true,
        // speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        initialSlide: 1,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="SpecialDish">
            <div className='heading '>
                <p className='spl-head'>Our Special Dishes</p>
            </div>
            <div className="Dishes mb-5">
                <Slider {...settings}>
                    {detailsArray.map((detail, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                            onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                        >
                            <div className="contentDetailsUpdtJob">
                                <div className="dish-img mb-3">
                                    <img className="updatedImgj" src={detail.image} alt={detail.title} />
                                </div>
                                {hoveredIndex === index && ( // Only show the title for the hovered image
                                    <div className="dish-name ">
                                        <p className='restarunt-name' >{detail.title}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <p className='restarunt-name '>SUSHI</p>
            <div className='align-items-center d-flex justify-content-center mt-3'>
               
            <button className="ordered-btn">ORDER NOW</button>
            </div>
        </div>
    );
}

export default SpecialDish;
