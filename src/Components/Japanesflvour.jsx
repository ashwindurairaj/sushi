import React from "react";
import "../Assets/Css/JapanesFloavour.css";
import Images from "../Assets/Image"

const JapaneseFlavours = () => {
    return (
        <div className="japanese-flavours-container">
            <div className="container fla row">
                <div className="flavours-text col-lg-6 col-md-6 col-sm-12">
                    <h2 className="flavours-title">
                        Savour Authentic <br /> Japanese Flavours
                    </h2>
                    <p>
                        At  {" "}
                        <strong>{`{TAKEAWAY NAME}`}</strong> in {" "}
                        <strong>{`{TAKEAWAY TOWN}`}</strong>, our pride lies in serving the most exquisite sushi creations. Our skilled sushi chefs meticulously craft
                        each roll with precision and passion, ensuring an unparallelled dining adventure. Immerse yourself in a world of flavours and textures, embarking on
                        a unique culinary journey that unveils the essence of Japan's rich gastronomic heritage with every bite.

                    </p>
                    <p>
                        Great food and limited time special offers are always available  At  {" "}
                        <strong>{`{TAKEAWAY NAME}`}</strong>,{" "}
                        <strong>{`{TAKEAWAY TOWN}`}</strong>. Feel free to browse through our brand new website and place an online order.
                    </p>
                    <button className="ordered-btn">ORDER NOW</button>
                </div>
                <div className="flavours-images col-lg-6 col-md-6 col-sm-12">
                    <img src={Images.prawn} alt="Dish 1" className="flavour-img img-1" />
                    <img src={Images.friedrice} alt="Dish 2" className="flavour-img img-2" />
                    <img src={Images.roll} alt="Dish 3" className="flavour-img img-3" />
                </div>
            </div>
        </div>
    );
};

export default JapaneseFlavours;
