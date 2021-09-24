import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {loading === true ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
