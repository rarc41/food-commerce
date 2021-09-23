import React from "react";
import HeaderImage from "../assets/images/headerimage.png";
import OfferEmoji from "../assets/images/d.png";
import Arrow from "../assets/icons/109617.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={HeaderImage} alt="hero" />
      <div className="hero-text">
        <h2>
          $0 delivery for 30 days!
          <span>
            <img className="hero-text-icon" src={OfferEmoji} alt="offer" />
          </span>
        </h2>
        <p>$0 delivery fee for orders over $10 for 30 days</p>
      </div>
      <button className="hero-button">
        Learn more
        <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Hero;
