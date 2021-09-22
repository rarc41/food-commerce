import Header from "./components/Header";
import HeaderImage from "./assets/images/headerimage.png";
import OfferEmoji from "./assets/images/d.png";
import Arrow from "./assets/icons/109617.svg";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products"

function App() {
  return (
    <div className="container">
      <section className="main">
        <Header></Header>
        <Hero></Hero>
        <Categories></Categories>
        <Products/>


      </section>
      <aside>
        <h1>aside</h1>
      </aside>
    </div>
  );
}

export default App;
