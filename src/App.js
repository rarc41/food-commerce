import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { useMediaQuery } from "react-responsive";

function App() {

const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  return (
    <div className="container">
      <section className="main">
        <Header></Header>
        <Hero></Hero>
        <Categories></Categories>
        <Products />
      </section>
      {!isTabletOrMobile && (
        <Cart elementsCart={4}></Cart>
      )}
    </div>
  );
}

export default App;
