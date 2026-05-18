import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.ProductReducer.products);

  useEffect(() => {
    console.log("re - - render hua hha");
  }, [products]);

  const cart = useSelector((state) => state.CardReducer.cart);
  console.log(cart);
  return (
    <div>
      <h1>Products</h1>
      <hr />
      <hr />
      <hr />
      <h2>{JSON.stringify(products)}</h2>
    </div>
  );
};

export default Product;
