import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToProduct } from "./Redux/action/productAction.js";
import Product from "./products/Product.jsx";
import Increment from "./products/Increment.jsx";
import { increment } from "./Redux/action/countAction.js";
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const handleAddToProduct = () => {
    dispatch(
      addToProduct({
        id: "1",
        modal: "Samsung",
      }),
    );
  };

  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div>
      app
      <br />
      <button className="border-2 bordre-black" onClick={handleAddToProduct}>
        Add To Product
      </button>
      <button className="border-2 bordre-black" onClick={handleIncrement}>
        Increment
      </button>
      <hr />
      <hr />
      <Product />
      <Increment />
    </div>
  );
};

export default App;
