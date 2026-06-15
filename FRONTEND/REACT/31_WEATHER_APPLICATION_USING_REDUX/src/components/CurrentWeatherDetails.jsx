import React from "react";
import { useSelector } from "react-redux";

const CurrentWeatherDetails = () => {
  const data = useSelector((state) => state.weatherReducre);

  if (data.loading) return <p className="pt-40">Loading.....</p>;
  if (data.error) return <p>{data.error}</p>;
  if (!data.current) return null;
  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.city}</h2>
          <p>Humidity : {data?.current?.main?.humidity}</p>
          <p>Temperature : {(data?.current?.main?.temp - 273).toFixed(2)}°C</p>
          <p>Description : {data?.current?.weather[0]?.description} </p>
          <p>SunRise : {Date(data?.current?.sys?.sunrise * 1000)}</p>
          <p>SunSet : {Date(data?.current?.sys?.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
