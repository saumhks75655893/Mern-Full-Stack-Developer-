import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setCity } from "../reduxStore/actions/weatherAction";
const Search = () => {
  const city = useSelector((state) => state.weatherReducre.city);
  const dispatch = useDispatch();

  function handleCity(e) {
    dispatch(setCity(e.target.value));
  }

  const handleSearchBtn = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="join">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          value={city}
          onChange={handleCity}
        />
      </label>
      <button onClick={handleSearchBtn} className="btn btn-primary join-item">
        Search
      </button>
    </div>
  );
};

export default Search;
