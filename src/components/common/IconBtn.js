import React from "react";
import { useMediaQuery } from "react-responsive";


const IconBtn = ({
  img,
  text,
  bgColor,
  size,
  width,
  height,
  iconSize,
  iconColor,
  bRadius,
  fontSize,
  margin,
}) => {

  const isSmallScreen = useMediaQuery({ query: "(max-width: 411px)" });
  const styleProfileIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: height ? height : "0rem",
    height: (size || height) ? (size || height) : "3rem",
    width: (size || width )? (size || width) : "3rem",
    backgroundColor: bgColor ? bgColor : "trasparent",
    borderRadius: bRadius,
    // opacity: opacity
    margin:  isSmallScreen ? '1rem': (margin ? margin : "0 2rem"),
  };

  const styleIcon = {
    height: iconSize,
    filter: iconColor,
  };

  const styleText = {
    fontWeight: "bold",
    fontSize: fontSize,
  };

  
  return (
    <div style={styleProfileIcon}>
      {img ? (
        <img style={styleIcon} src={img} alt="people"></img>
      ) : (
        <span style={styleText}>{text}</span>
      )}
    </div>
  );
};

export default IconBtn;
