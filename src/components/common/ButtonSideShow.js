import React from "react";
import Cart from "../../assets/icons/cart.svg";

// this is the floating button used to shoy de side bar

const ButtonSideShow = ({onClick, active}) => {
  const iconStyle = {
    height: "50%",
  };

  return (
    <button className={active? 'btn-cart ripple-active':"btn-cart ripple"} onClick={onClick}>
      <img style={iconStyle} src={Cart} alt='cart'/>
    </button>
  );
};
export default ButtonSideShow;
