import { create } from "zustand";

const useForecastStore = create((set) => ({
  forecast: null,
  setForecast: (forecast) => set({ forecast }),
}));

export default useForecastStore;