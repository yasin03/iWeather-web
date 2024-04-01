import React, { useEffect, useState } from "react";
import useForecastStore from "../../store";
import Image from "next/image";
import { fahrenheitToCelsius, formatSunDate, kelvinToCelsius } from "@/utils";

const MainForecast = () => {
  const forecast = useForecastStore((state) => state.forecast);
  const weather = useForecastStore((state) => state.weather);
  const [degree, setDegree] = useState(weather?.wind?.deg);

  useEffect(() => {
    setDegree(weather?.wind?.deg + 45);
  }, [degree]);

  return (
    <div className="bg-gray-300  w-full rounded-3xl flex flex-col justify-between lg:flex-row h-[350px]">
      <div className="relative w-full h-1/2 lg:w-1/2 lg:h-full">
        <div className="absolute w-full h-[200px] lg:h-full">
          <Image
            src="/weather/RainDay.png"
            layout="fill"
            objectFit="cover"
            alt="iWeather Logo"
            className=" rounded-3xl"
          />
        </div>
        <div className=" p-3 lg:p-6 flex flex-col justify-between items-center h-full">
          <div className="flex flex-col items-center justify-between">
            <div className="relative w-16 h-16 lg:w-32 lg:h-32">
              <Image
                src={`/icons/${weather?.weather[0]?.icon}.png`}
                layout="fill"
                objectFit="cover"
                className=""
                alt=""
              />
            </div>
            <p className="z-50 md:text-4xl lg:text-6xl font-semibold text-white">
              {(weather?.main?.temp)}°C
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row justify-between items-center gap-x-4">
            <div className="flex items-center ">
              <p className="z-50 font-semibold text-white text-sm">
                {weather?.main?.humidity}% Nem
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
              <p className="z-50 font-semibold text-white text-sm">
                {weather?.main?.pressure} hPa Basınç
              </p>
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <Image
                  src={`/weatherIcons/thermometer.png`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={`relative w-4 h-4 lg:w-6 lg:h-6`}
                style={{ transform: `rotate(${degree}deg)` }}
              >
                <Image
                  src={`/weatherIcons/navigation-arrow.png`}
                  layout="fill"
                  objectFit="cover"
                  className={``}
                  alt=""
                />
              </div>
              <p className="z-50 font-semibold text-white text-sm">
                {weather?.wind?.speed} mt Rüzgar
              </p>
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <Image
                  src={`/weatherIcons/wind.png`}
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
      <div className="flex flex-col text-end p-4 lg:p-6 gap-y-4">
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
