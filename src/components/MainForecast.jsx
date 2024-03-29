import React from "react";
import useForecastStore from "../../store";
import Image from "next/image";
import { fahrenheitToCelsius, formatSunDate, kelvinToCelsius } from "@/utils";

const MainForecast = () => {
  const forecast = useForecastStore((state) => state.forecast);
  const weather = useForecastStore((state) => state.weather);

  console.log(weather);
  return (
    <div className="bg-gray-300  w-full h-[300px] rounded-3xl flex flex-col lg:flex-row">
      <div className="relative w-full h-1/2 lg:w-1/2 lg:h-full ">
        <div className=" w-full h-full">
          <Image
            src="/weather/RainDay.png"
            layout="fill"
            objectFit="cover"
            alt="iWeather Logo"
            className=" rounded-3xl"
          />
        </div>
        <div className="absolute top-0 p-6 flex justify-between items-center">
          <div>
            <div className="relative w-16 h-16 lg:w-32 lg:h-32">
              <Image
                src={`/icons/${weather?.weather[0]?.icon}.png`}
                layout="fill"
                objectFit="cover"
                className=""
                alt=""
              />
            </div>
            <p className="text-3xl md:text-4xl lg:text-7xl font-semibold text-white">
              {kelvinToCelsius(weather?.main?.temp)}°C
            </p>
          </div>
          <div className="">
            <div className="flex items-center">
              <p className="font-semibold text-white">
                {weather?.main?.humidity}°C
              </p>
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <Image
                  src={`/weatherIcons/drop-half-bottom.png`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-semibold text-white">
                {weather?.main?.pressure}%
              </p>
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <Image
                  src={`/weatherIcons/drop-half-bottom.png`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-y-4">
        <div className="text-3xl md:text-5xl font-semibold">
          <span>{forecast?.city?.name}, </span>
          <span>{forecast?.city?.country}</span>
        </div>
        <div className="flex flex-col md:text-lg">
          <p>
            Gün Doğumu : <span>{formatSunDate(forecast?.city?.sunrise)}</span>
          </p>
          <p>
            Gün Batımı : <span>{formatSunDate(forecast?.city?.sunset)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainForecast;
