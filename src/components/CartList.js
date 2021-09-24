import React from "react";
import Product from "./Product";
import {useSelector} from 'react-redux'

// import { addToCart } from "../actions/cartActions";


// component to render the list of producs in the cart shopping

const CartList = () => {


  const cartItemsList = useSelector((state) => state.cart);
  const { cartItems } = cartItemsList;
  return (
    <div className="cart-list">
      {cartItems.map((product) => (
        <Product key={product.id} inCart={true} product={product} qty={product.qty}/>
      ))}
    </div>
  );
};

export default CartList;
