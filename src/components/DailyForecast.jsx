"use client"
import useForecastStore from '../../store';

const DailyForecast = () => {
  const forecast = useForecastStore((state) => state.forecast);
  const weather = useForecastStore((state) => state.weather);
  return (
    <div className="w-full bg-gray-50 bg-opacity-10 h-48 rounded-3xl p-6">
      DailyForecast
    </div>
  );
}

export default DailyForecast