import { create } from "zustand";

const useForecastStore = create((set) => ({
  forecast: null,
  weather: null,
  loading: false,
  setForecast: (forecast) => set({ forecast }),
  setWeather: (weather) => set({ weather }),
  setLoading: (loading) => set({ loading }),
}));

export default useForecastStore;