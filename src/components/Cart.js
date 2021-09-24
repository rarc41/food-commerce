import React from "react";
import EmojiOrders from "../assets/icons/emoji-removebg-preview.png";
import IconBtn from "./common/IconBtn";
import ClockIcon from "../assets/icons/149316.svg";
import ProfileIcon from "../assets/icons/747376.svg";
import CartList from "./CartList";
import IncDecBtn from "./common/IncDecBtn";
import Arrow from "../assets/icons/109617.svg";
import {useSelector} from 'react-redux'


// this component is the complete sidebarm, 
// the list of products on the current cart, 
// is rendered in a child component of this  (CartList)

const styleEmoji = {
  height: "4rem",
  width: "4rem",
};

const stayleTitle = {
  display: "flex",
  flexDirection: "column",
  height: "10rem",
  backgroundColor: "trasparent",
  padding: "0 3rem",
  // marginTop: "3rem",
};

const styleParagraph = {
  display: "flex",
  // marginLeft: "3rem",
  fontSize: "1.5rem",
  justifyContent: "space-between",
  width: "100%",
};

const styleSpan = {
  color: "var(--yellow)",
};

const styleTotal = {
  display: "flex",
  height: "7rem",
  width: "85%",
  marginTop: "3rem",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid var(--grey)",
};

const styleCheckout = {
  display: "flex",
  height: "7rem",
  width: "85%",
  marginTop: "2rem",
  justifyContent: "space-between",
};

const styleCheckoutButton = {
  display: "flex",
  height: "7rem",
  width: "40%",
  backgroundColor: "var(--yellow)",
  border: "none",

  justifyContent: "space-evenly",
  alignItems: "center",
  borderTopLeftRadius: "15% 4rem",
  borderBottomLeftRadius: "15% 4rem",

};

const stylePersonsCounter = {
  display: "flex",
  flexDirection: "column",
  height: "7rem",
  width: "40%",
  justifyContent: "space-evenly",
};

const Cart = ({ elementsCart, show }) => {


  const cartItemsList = useSelector((state) => state.cart);
  const { cartItems } = cartItemsList;

  let total = cartItems.reduce((sum, item)=>(sum+(item.qty*item.price)),0)

  return (
    <aside className={show===true? "cart": 'cart inactive'}>
      <nav className="icons-info">
        {/* <ProfileIconBtn></ProfileIconBtn>
        <CounterIconBtn elementsCart={4} /> */}
        <IconBtn
          img={ProfileIcon}
          size="3rem"
          iconSize="1.5rem"
          //   bgColor="rgb(251, 213, 96, 0.3)"
          bRadius="1rem"
        ></IconBtn>
        <IconBtn
          text={elementsCart}
          fontSize="2rem"
          size="4rem"
          iconSize="1.5rem"
          bgColor="var(--yellow)"
          bRadius="1rem"
        ></IconBtn>
      </nav>

      <div style={stayleTitle}>
        <h1>
          My{" "}
          <span>
            <img src={EmojiOrders} style={styleEmoji} alt="pac-man emoji"></img>
          </span>
        </h1>
        <h1>Orders</h1>
      </div>

      <div className="direction-container">
        <p style={styleParagraph}>
          625 St Marks Ave <span style={styleSpan}> Edit</span>
        </p>

        <div className="row-container">
          <IconBtn
            img={ClockIcon}
            // size="4rem"
            height="3rem"
            width="4rem"
            iconSize="1.5rem"
            bgColor="rgb(251, 213, 96, 0.3)"
            bRadius="0.7rem"
            // opacity="0.5"
            iconColor="invert(86%) sepia(100%) saturate(445%) hue-rotate(322deg) brightness(100%) contrast(98%)"
          ></IconBtn>
          <p style={styleParagraph}>
            36 min <span style={styleSpan}> Choose Time</span>
          </p>
        </div>
      </div>
      <CartList></CartList>

      <div className="row-container" style={{ justifyContent: "flex-end" }}>
        <div style={styleTotal}>
          <span style={{ fontSize: "2.3rem", fontWeight: "normal" }}>
            Total:
          </span>
          <span style={{ fontSize: "3rem", fontWeight: "bold" }}> $ {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="row-container" style={{ justifyContent: "flex-end" }}>
        <div style={styleCheckout}>
          <div style={stylePersonsCounter}>
            <span>Persons</span>
            <IncDecBtn />
          </div>
          <div style={styleCheckoutButton} className="checkout-button">
            <span style={{fontWeight: "bold", fontSize: "1.3rem", cursor: 'pointer'}}>Checkout</span>
            <span style={{ display: "flex" }}>
              <img src={Arrow} alt="arrow" style={{ height: "2rem" }} />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
