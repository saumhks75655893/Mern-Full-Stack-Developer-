import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
    setLoader(false);
  };
  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);

  if (loader) return <Loader classname={`absolute left-[45%]  top-[200px]`} />;
  return (
    <div className="grid grid-cols-4 max-[798px]:grid-cols-3 max-[470px]:grid-cols-2 max-[350px]:grid-cols-1 gap-5 p-4 m-3">
      {product.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

function ProductCard({ elem }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${elem.id}`)}
      className="group bg-amber-200  py-4 px-4 rounded-2xl transition-all duration-200
       flex flex-col "
    >
      <img
        className="aspect-square object-contain p-5 group-hover:scale-90 transition-all duration-200"
        src={elem.image}
        alt=""
      />

      <p className="py-1 line-clamp-1 font-semibold group-hover:text-blue-500">
        {elem.title}
      </p>
      {/* rating and could  */}
      <div className="flex items-center gap-6 text-xs font-semibold text-gray-600 py-2">
        <p className="bg-green-500 px-4 py-2 rounded-xl flex items-center gap-1 ">
          <span>⭐</span>
          {elem.rating.rate}
        </p>
        <p>{elem.rating.count}</p>
      </div>
      <p className="text-[16px] font-bold">{elem.price} Rs</p>
    </div>
  );
}

export default Products;
