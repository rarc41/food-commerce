import React, {useState, useEffect} from "react";
import Product from "./Product";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const Products = () => {


  const [products, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getProducts = async () => {
    setCargando(true)
    const data = await getDocs(collection(db, "productos"));
    const lista=[]
    data.forEach((doc) => {
      // console.log(doc.data());
      lista.push(doc.data());
    })
    setProductos(lista);
    setCargando(false)
  };

  useEffect(() => {
    getProducts()

  }, []);
  return (
    <div className="product-list">
      {cargando===true? (
        <h1>Cargando...</h1>
      ):(

        products.map(product=>(
          <Product key={product.id} product={product}/>
      ))
      )}
        {/* {products.map(product=>(
            <Product key={product.id} product={product}/>
        ))} */}
    </div>
  );
};

export default Products;
