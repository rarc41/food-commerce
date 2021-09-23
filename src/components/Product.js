import React, { Fragment } from "react";
import StarIcon from "../assets/icons/149220.svg";
import IconBtn from "./common/IconBtn";

const Product = ({ product, inCart }) => {
  const { name, image, qualification, time } = product;

  const styleInfo = { display: "flex", paddingLeft: "1rem", height:'4rem', width:'55%', justifyContent: 'space-between' , alignItems: 'center'}
  return (
    <Fragment>
      {!inCart && (
        <div className="product">
          <div className="product-img">
            <img src={image} alt={name} />
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
        <div className="row-container" style={{ margin: "2rem" }}>
          <div
            className="cart-item-img"
          >
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <IconBtn text={3} size="2rem" fontSize="1.5rem" margin="0 1rem"></IconBtn>
          <IconBtn text={"x"} size="1rem" fontSize="1.5rem" margin="0 1rem"></IconBtn>
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
