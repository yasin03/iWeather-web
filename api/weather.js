import axios from "axios";
const key = process.env.OPENWEATHER_API_KEY;

const forecastEndpoints = (city) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6d1569f544cff0b8b160fcb8bdcf7245`;

const locationsEndpoints = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=ecf700bdb56546df9cc120424230106&q=${params.cityName}`;

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

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoints(params));
};
export const fetchLocations = (params) => {
  return apiCall(locationsEndpoints(params));
};
