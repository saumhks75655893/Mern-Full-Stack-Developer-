import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    const res = await axios.get(`https://fakestoreapi.com/products/${id} `);
    setProduct(res.data);
    setLoader(false);
  };
  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) return <Loader classname={`absolute left-[45%]  top-[200px]`} />;

  return (
    <div
      className="bg-black/30  py-4 px-4 transition-all duration-200
    flex flex-col "
    >
      <p className="py-1  font-bold text-white text-center text-5xl  ">
        {product.title}
      </p>
      <img
        className="aspect-square object-contain w-100 m-auto p-4  transition-all duration-200"
        src={product.image}
        alt=""
      />

      {/* rating and could  */}
      <div className="flex flex-col items-center m-auto gap-6 text-xl font-semibold text-gray-600 py-2 max-w-200">
        <div className="flex  items-center gap-6 text-xl font-semibold text-gray-600 py-2">
          <p className="bg-green-500 px-4 py-2 rounded-xl flex items-center gap-1 ">
            <span>⭐</span>
            {product?.rating?.rate}
          </p>
          <p>{product?.rating?.count}</p>
        </div>
        <p className="text-[40px] font-bold">{product.price} Rs</p>
        <p className="py-1  font-semibold text-blue-800 text-xl">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
