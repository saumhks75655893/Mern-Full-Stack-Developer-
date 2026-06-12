import React, { useContext } from "react";
import { useNewsContext } from "../context/NewsContext";

const Slider = ({ Data }) => {
  const { setNews, fetchNews } = useNewsContext();

  async function handleSideBar(e) {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data.articles);
    Data(false);
  }

  let timer;
  function handleSearch(e) {
    const searchVal = e.target.value;
    if (!searchVal) return;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchVal}`);
      setNews(data.articles);
      Data(false);
    }, 1000);
  }

  const categories = [
    "Business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  // function handleClick(){
  //   console.log("clicked")
  // }
  return (
    <div className="w-50  bg-base-200 absolute right-0 top-15 z-35  transition-all duration-200 flex flex-col  gap-3 py-3">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-red-800 font-bold mb-5 content-end">
          HkS NEWS
        </a>
      </div>
      <div className="flex gap-2">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          className="input input-bordered md:w-auto w-full px-4 mx-2"
        />
      </div>
      <div className="py-3">
        {categories.map((elem) => {
          return (
            <div key={elem} className="flex my-2 w-full px-4">
              <button
                onClick={handleSideBar}
                value={elem}
                key={elem}
                className="btn btn-active btn-accent w-full"
              >
                {elem}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
