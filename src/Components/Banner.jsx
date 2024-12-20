import React from 'react'
import Images from "../Assets/Image"
import "../Assets/Css/Banner.css"

function Banner() {
    return (
        <div className="banner-container col-lg-12 col-md-12 col-sm-12">
            <img
                src={Images.ban} alt="U-Cut Banner" className="banner-image"
            />
            <p className="banner-text">A Taste of Fireworks <br />in Your Taste Buds</p>
            <div className='read-more'>
                <button className="btn">
                    ORDER NOW
                </button>
            </div>
        </div>
    )
}

export default Banner