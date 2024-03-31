import Image from "next/image";
import React, { useEffect, useState } from "react";
import useForecastStore from "../../store";

const HourlyForecast = () => {
  const forecast = useForecastStore((state) => state.forecast);
  const weather = useForecastStore((state) => state.weather);
  const [currentTime, setCurrentTime] = useState();
  const [currrentDate, setCurrentDate] = useState();

  useEffect(() => {
    let tm = new Date();
    tm = tm.getHours();
    setCurrentTime(tm);
  }, []);

  return (
    <div className="bg-gray-50 bg-opacity-10 w-full rounded-3xl p-6">
      <h4 className="text-2xl text-center font-semibold mb-4 text-white">SAATLİK HAVA DURUMU</h4>
      <div className=" w-full rounded-xl flex justify-between items-center overflow-auto pb-6 ">
        {forecast?.list?.slice(0, 12).map((item, index) => {
          let time = item.dt_txt;
          time = time.split(" ");
          const crTime = time[1].slice(0, 5);

          return (
            <div
              key={index}
              className="flex-column items-center justify-center p-3 border-2 border-gray-300 border-opacity-30 rounded-xl mr-3 py-12 px-6 "
            >
              <Image
                src={`/icons/${item?.weather[0]?.icon}.png`}
                /* source={weatherImages[item?.day?.condition?.text || 'other']} */
                width={50}
                height={50}
                alt=""
              />
              <p className="text-white">
                {crTime == currentTime ? "Now" : crTime}
              </p>
              <p className="text-center font-bold text-xl text-white">
                {(item?.main?.temp).toFixed(0)}&#176;C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
