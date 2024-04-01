"use client";
import DailyForecast from "@/components/DailyForecast";
import useForecastStore from "../../../store";

const Page = () => {
  const loading = useForecastStore((state) => state.loading);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <>
          <div className="flex rounded-b-3xl h-full w-10/12 lg:w-9/12 flex-col items-center justify-start gap-y-4 p-6 pb-12 lg:p-24 bg-gray-200 bg-opacity-30 mx-auto mb-12">
            <DailyForecast />
          </div>
        </>
      )}
    </>
  );
};

export default Page;
