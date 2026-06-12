import React from "react";
import { useSelector } from "react-redux";

const ForecastWeatherDetails = () => {
  const { forecast, loading, error } = useSelector(
    (state) => state.weatherReducre,
  );

  if (error) return <p>Some Error Occured.....</p>;
  if (!forecast) return null;
  return (
    <div>
      <div>
        <div className="relative card bg-neutral text-neutral-content w-auto h-200 scroll-auto overflow-scroll">
          <div className="relative card-body items-center text-center">
            <div className="sticky top-0 bg-[#09090b] w-full">
              <h2 className="card-title text-3xl font-bold p-2 py-8 text-blue-500">
                4 DAYS WEATHER FORECAST
              </h2>
            </div>
            {forecast?.map((elem, index) => (
              <div
                key={index}
                className="bg-blue-950 w-full rounded-xl p-3 flex flex-col items-center"
              >
                <p>
                  <span className="text-red-800 font-bold text-xl">
                    {elem.dt_txt}
                  </span>{" "}
                  -{" "}
                  <span className="text-green-500 font-bold text-xl">
                    {(elem?.main?.temp - 273).toFixed(2)}
                    °C
                  </span>
                </p>
              </div>
            ))}
            {/* <p>Humidity : {data}</p>
            <p>Humidity : {data}</p>
            <p>Description : {data} </p>
            <p>SunRise : {data}</p>
            <p>SunSet :{data}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastWeatherDetails;
