import { create } from "zustand";

const useForecastStore = create((set) => ({
  forecast: null,
  weather: null,
  setForecast: (forecast) => set({ forecast }),
  setWeather: (weather) => set({ weather }),
}));

export default useForecastStore;