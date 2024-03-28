"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { fetchWeatherForecast } from "../../api/weather";
import { useEffect, useState } from "react";
import useForecastStore from "../../store";

function Page() {
  const forecast = useForecastStore((state) => state.forecast);
  const setForecast = useForecastStore((state) => state.setForecast);


  const loadData = async () => {
    try {
      const res = await fetchWeatherForecast("istanbul");
      setForecast(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(forecast);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>deneme</div>
      <Button variant="contained">Hello world</Button>
    </main>
  );
}

export default Page;
