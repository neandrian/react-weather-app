import React from "react";
import { useWeather } from "../context/WeatherContext";
import Form from "./Form";

function Header() {
  const { selectedCity } = useWeather();

  return (
    <div className="row">
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Şehir Hava Durumları</h2>
            <p className="mt-4 text-lg dark:text-gray-400">Türkiye' deki illeri listeden seçerek 5 günlük hava durumu bilgilerine ulaşabilirsiniz. Şehir ismini kendiniz yazarak diğer ülkelerdeki şehirlerin hava durumu bilgilerine ulaşabilirsiniz.</p>
          </div>
          <Form />
          <div className="flex justify-center mt-10">
            <h1 className=" text-6xl">{selectedCity.toUpperCase()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
