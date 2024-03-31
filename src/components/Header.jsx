import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const currentDate = new Date();

  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  return (
    <header className=" w-10/12 lg:w-9/12 h-20 bg-gray-800 flex justify-between items-center px-10 z-50 mx-auto">
      <Link href="/" className="flex items-center gap-x-4 cursor-pointer">
        <Image src="/logo.png" width={50} height={50} alt="iWeather Logo" />
        <span className="text-gray-100 invisible md:visible text-3xl font-semibold">
          iWeather
        </span>
      </Link>
      <div className="text-lg text-gray-100 italic text-right">
        <p> {currentDate.toLocaleDateString("tr-TR")}</p>
      </div>
    </header>
  );
};

export default Header;
