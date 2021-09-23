import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ButtonSideShow from "./components/common/ButtonSideShow";

import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const [showCart, setShowCart] = useState(false);

  const showCartSide = () => {
    setShowCart(true);
  };

  return (
    <div className="container">
      <section className="main">
        <Header></Header>
        <Hero></Hero>
        <Categories></Categories>
        <Products />
      </section>
      {/* {!isTabletOrMobile && (
        <Cart elementsCart={4}></Cart>
      )} */}
      {isTabletOrMobile && (
        <ButtonSideShow
          onClick={() => setShowCart(!showCart)}
          active={showCart}
        />
      )}
      <Cart elementsCart={4} show={showCart}></Cart>
    </div>
  );
}

export default App;
