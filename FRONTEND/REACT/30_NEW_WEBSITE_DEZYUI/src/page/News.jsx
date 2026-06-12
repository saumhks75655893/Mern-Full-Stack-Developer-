import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext.jsx";
import Loader from "../components/Loader.jsx";
const News = ({ Data }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();
  function handleSideBar() {
    Data(false);
  }

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (loading)
    return <Loader className={"bg-transparent w-fit m-auto py-24 mb-40"} />;

  return (
    <>
      <div onClick={handleSideBar}>
        <Wrapper>
          <div className="grid grid-cols-4 gap-5 my-4 max-[710px]:grid-cols-3 max-[710px]:px-4 max-[550px]:grid-cols-2 max-[550px]:px-4 max-[334px]:grid-cols-1 max-[334px]:px-4">
            {news?.map((newsArticle, index) => {
              if (!newsArticle.urlToImage) return null;
              return <NewCard key={index} details={newsArticle} />;
            })}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

const NewCard = ({ details }) => {
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <figure>
          <img
            className=" w-full aspect-video object-cover"
            src={details.urlToImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{details.title}</h2>
          <p className="line-clamp-3">{details.description}</p>
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => window.open(details.url)}
              className="badge badge-outline px-4 py-4 font-bold"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
