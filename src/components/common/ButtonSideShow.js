import React from "react";
import Cart from "../../assets/icons/cart.svg";

const ButtonSideShow = ({onClick, active}) => {
  const iconStyle = {
    height: "50%",
  };

  return (
    <button className={active? 'btn-cart ripple-active':"btn-cart ripple"} onClick={onClick}>
      <img style={iconStyle} src={Cart} />
    </button>
  );
};
export default ButtonSideShow;
