import {
  FETCH_WEATHER_PENDING,
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  SET_CITY,
} from "../constant/weaTherConstant";
import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API;

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};

export const fetchCurrentSucces = (data) => {
  return {
    type: FETCH_CURRENT_SUCCESS,
    payload: data,
  };
};

export const fetchForecastSuccss = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherPending());

    try {
      const currentWeatherDeatails = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      );

      const forecastWeatherDetails = await axios(
        `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
      );

      // console.log(currentWeatherDeatails.data);
      // console.log(forecastWeatherDetails.data.list);

      dispatch(fetchCurrentSucces(currentWeatherDeatails.data));
      dispatch(fetchForecastSuccss(forecastWeatherDetails.data.list));
    } catch (error) {
      dispatch(fetchWeatherError("Something Went Wrong"));
    }
  };
};
