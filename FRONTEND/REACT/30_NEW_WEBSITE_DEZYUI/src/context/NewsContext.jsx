import { createContext, useContext, useState } from "react";
import News from "../page/News";
import api from "../config/Axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState();

  const fetchNews = async (url = "/everything?q=india") => {
    try {
      setLoading(true);
      const res = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setLoading(false);
      return res.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
    setLoading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
