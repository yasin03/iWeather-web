"use client";
import { fetchForecast, fetchWeather } from "../../api/weather";
import { useEffect, useState } from "react";
import useForecastStore from "../../store";
import MainForecast from "@/components/MainForecast";
import Header from "@/components/Header";
import SearchCity from "@/components/SearchCity";
import HourlyForecast from "@/components/HourlyForecast";
import Link from "next/link";

function Page() {
  const forecast = useForecastStore((state) => state.forecast);
  const setForecast = useForecastStore((state) => state.setForecast);
  const setWeather = useForecastStore((state) => state.setWeather);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  const value = inputValue.toLowerCase();
  console.log(value);
  const loadData = async () => {
    try {
      const foreData = await fetchForecast("istanbul");
      const weatData = await fetchWeather("çanakkale");
      setForecast(foreData);
      setWeather(weatData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="flex rounded-b-3xl w-10/12 lg:w-9/12 flex-col items-center justify-start gap-y-4 p-6 lg:p-24 bg-gray-200 bg-opacity-30 mx-auto mb-12	">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchCity setInputValue={setInputValue} />
          
          <MainForecast />
          <Link
            href="/forecast"
            className=" w-full h-12 mx-auto bg-gray-800 flex justify-center items-center rounded-xl text-gray-400"
          >
            Detaylı Hava Durumu Sayfasına Git
          </Link>
          <HourlyForecast />
        </>
      )}
    </main>
  );
}

export default Page;
