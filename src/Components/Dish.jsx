import React from "react";
import "../Assets/Css/Dish.css";
import Images from "../Assets/Image";

const Dish = () => {
    return (
        <div className="steps-section">
            <div className="container step-head">
                <img
                    src={Images.momos} alt="U-Cut Banner" className="momos-image"
                />
                <img
                    src={Images.vector} alt="U-Cut Banner" className="vector-image"
                />
            </div>
            <div className="container steps-container mt-5">
                <div className="step">
                    <div className="step-icon">
                        <img src={Images.tray} alt="Pick a Dish" />
                    </div>
                    <h3 className="step-title">PICK A DISH</h3>
                    <p className="step-description">
                        Choose your favourite dish from our delectable menu.
                    </p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <img src={Images.wallet} alt="Make a Payment" />
                    </div>
                    <h3 className="step-title">MAKE A PAYMENT</h3>
                    <p className="step-description">
                        Online payment is simple and convenient.
                    </p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <img src={Images.fast} alt="Receive Your Food" />
                    </div>
                    <h3 className="step-title">RECEIVE YOUR FOOD</h3>
                    <p className="step-description">
                        We will deliver hot food right to your door.
                    </p>
                </div>
            </div>
            <div className="culinary-section">
                <div className="container culinary-container">
                    <div className="culinary-text">
                        <h2 className="culinary-title">Japanese Culinary <br/> Extravaganza</h2>
                        <p className="culinary-description">
                            Indulge in a diverse array of meticulously crafted Japanese delicacies at{" "}
                            <strong>{`{TAKEAWAY NAME}`}</strong> in{" "}
                            <strong>{`{TAKEAWAY TOWN}`}</strong>. From fresh sashimi and sushi rolls to hearty bowls of ramen, our menu showcases the finest ingredients and flavours. Immerse yourself in the world of culinary delight.
                        </p>
                        <button className="order-btn">ORDER NOW</button>
                    </div>
                    <div className="culinary-images">
                        <img src={Images.sashmi} alt="Main Dish" className="main-dish" />
                        <img src={Images.vector} alt="Side Image 2" className="side-img mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dish;
