import React, { Fragment, useEffect } from "react";
import StarIcon from "../assets/icons/149220.svg";
import IconBtn from "./common/IconBtn";

import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../actions/cartActions";

const styleInfo = {
  display: "flex",
  paddingLeft: "1rem",
  height: "4rem",
  width: "55%",
  justifyContent: "space-between",
  alignItems: "center",
};

const Product = ({ product, inCart, qty }) => {
  const { name, image, qualification, time, id } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };

  const removeToCartHandler = () => {
    console.log(product)
    dispatch(removeFromCart(product));
  }

  useEffect(() => {

  }, [qty])

  return (
    <Fragment>
      {!inCart && (
        <div className="product" onClick={() => addToCartHandler()}>
          <div className="product-img ripple">
            <img src={image} alt={name} className="ripple-img" />
            <div className="product-tiempo">{time}</div>
          </div>
          <h3>{name}</h3>
          <div className="qualification">
            <img src={StarIcon} alt="Star" />
            <div className="precio">
              <span>{qualification}</span>Deli &bull; Bagels &bull; $$
            </div>
          </div>
        </div>
      )}

      {inCart && (
        <div
          className="row-container ripple-img"
          style={{ margin: "2rem" }}
          onClick={() => removeToCartHandler()}
        >
          <div className="cart-item-img ripple-img">
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
            />
          </div>
          <IconBtn
            text={qty}
            size="2rem"
            fontSize="1.5rem"
            margin="0 1rem"
          ></IconBtn>
          <IconBtn
            text={"x"}
            size="1rem"
            fontSize="1.5rem"
            margin="0 1rem"
          ></IconBtn>
          <div style={styleInfo}>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Product;
