import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ButtonSideShow from "./components/common/ButtonSideShow";
import { useMediaQuery } from "react-responsive";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const [showCart, setShowCart] = useState(false);

  

  useEffect(() => {
    const productsRef = collection(db, "productos");
    const q = query(productsRef, where("id", "==", 3));
    const getDatos = async () => {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    }

    getDatos()

  }, [])

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
