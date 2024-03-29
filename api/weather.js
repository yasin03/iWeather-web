import axios from "axios";
const key = process.env.OPENWEATHER_API_KEY;

const forecastEndpoints = (city) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6d1569f544cff0b8b160fcb8bdcf7245`;

const weatherEndpoints = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d1569f544cff0b8b160fcb8bdcf7245`;

const locationsEndpoints = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=6d1569f544cff0b8b160fcb8bdcf7245&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchForecast = (params) => {
  return apiCall(forecastEndpoints(params));
};
export const fetchWeather = (params) => {
  return apiCall(weatherEndpoints(params));
};
export const fetchLocations = (params) => {
  return apiCall(locationsEndpoints(params));
};
