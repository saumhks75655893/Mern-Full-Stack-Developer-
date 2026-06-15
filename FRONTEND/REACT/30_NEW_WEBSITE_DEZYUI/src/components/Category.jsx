import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  async function handleClick(e) {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data.articles);
  }

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className="flex gap-3 justify-center py-3 ">
          {categories.map((elem) => {
            return (
              <button
                onClick={handleClick}
                value={elem}
                key={elem}
                className="btn btn-active btn-accent max-[710px]:hidden "
              >
                {elem}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
