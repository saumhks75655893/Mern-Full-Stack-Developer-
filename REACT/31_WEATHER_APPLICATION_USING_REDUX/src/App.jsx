import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./reduxStore/actions/weatherAction";
import Search from "./components/Search";
import CurrentWeatherDetails from "./components/CurrentWeatherDetails";
import ForecastWeatherDetails from "./components/ForecastWeatherDetails";

const App = () => {
  const city = useSelector((state) => state.weatherReducre.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("delhi"));
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <div className="bg-[#1d232a] gap-5 p-8 w-full flex flex-col items-center sticky top-0 z-99">
        <h1 className="text-7xl font-bold">Weather Dashboard</h1>
        <Search />
      </div>
      <div className="p-4 flex flex-col items-center">
        <CurrentWeatherDetails />
      </div>
      <div className="p-4 flex flex-col items-center scroll-auto">
        <ForecastWeatherDetails />
      </div>
    </div>
  );
};

export default App;
