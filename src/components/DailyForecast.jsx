"use client";
import Image from "next/image";
import useForecastStore from "../../store";
import { useEffect, useState } from "react";
import { formatSunDate, getShortDayName } from "@/utils";

const DailyForecast = () => {
  const forecast = useForecastStore((state) => state.forecast);
  const weather = useForecastStore((state) => state.weather);
  const [currentTime, setCurrentTime] = useState();
  const [currrentDate, setCurrentDate] = useState();


  useEffect(() => {
    let tm = new Date();
    tm = tm.getHours();
    setCurrentTime(tm);
  }, []);

  console.log(forecast);

  return (
    <div className="w-full  h-full rounded-3xl p-6">
      <h4 className="text-2xl text-center font-semibold mb-4 text-white">
        <div className="text-3xl md:text-5xl font-semibold">
          <span>{forecast?.city?.name}, </span>
          <span>{forecast?.city?.country}</span>
        </div>
        5 GÜNLÜK HAVA DURUMU
      </h4>
      <div className=" rounded-xl flex flex-col justify-between items-center  pb-6 gap-y-6">
        {forecast?.list?.map((item, index) => {
          let time = item.dt_txt;
          time = time.split(" ");
          const crTime = time[1].slice(0, 5);

          if (crTime == "09:00") {
            return (
              <div
                key={index}
                className="w-full flex  items-center justify-between p-6 border-2 border-gray-300 border-opacity-30 rounded-xl mr-3  mx-auto bg-gray-50 bg-opacity-10"
              >
                <div>
                  <div>
                    <p className="text-white">
                      {getShortDayName(item?.dt_txt)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-center font-bold text-6xl text-white">
                      {(item?.main?.temp).toFixed(0)}&#176;C
                    </p>
                    <Image
                      src={`/icons/${item?.weather[0]?.icon}.png`}
                      /* source={weatherImages[item?.day?.condition?.text || 'other']} */
                      width={80}
                      height={80}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" flex flex-col justify-between items-center gap-y-4">
                  <div className="flex items-center ">
                    <p className="z-50 font-semibold text-white text-sm">
                      {item?.main?.humidity}% Nem
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
                      {item?.main?.pressure} hPa Basınç
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
                      style={{ transform: `rotate(${item?.wind?.deg + 45}deg)` }}
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
                      {item?.wind?.speed} mt Rüzgar
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
                <div className="flex flex-col md:text-lg">
                  <div className="flex gap-x-2 text-gray-100">
                    <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                      <Image
                        src={`/weatherIcons/sun-horizon.png`}
                        layout="fill"
                        objectFit="cover"
                        className=""
                        alt=""
                      />
                    </div>
                    Gün Doğumu :{" "}
                    <span>{formatSunDate(forecast?.city?.sunrise)}</span>
                  </div>
                  <div className="flex gap-x-2 text-gray-100">
                    <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                      <Image
                        src={`/weatherIcons/sun-horizon.png`}
                        layout="fill"
                        objectFit="cover"
                        className=""
                        alt=""
                      />
                    </div>
                    Gün Batımı :{" "}
                    <span>{formatSunDate(forecast?.city?.sunset)}</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
