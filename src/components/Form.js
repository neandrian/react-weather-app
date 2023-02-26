import React, { useRef } from "react";
import cities from "../data/cities.json";

import { useWeather } from "../context/WeatherContext";

function Form() {
  const { setSelectedCity } = useWeather();
  const cityTextRef = useRef("");

  const handleChangeSeletedCity = (text) => {
    setSelectedCity(text);
    cityTextRef.current.value = "";
  };

  return (
    <div className="flex flex-col justify-around mt-6 md:flex-row">
      <div>
        <label htmlFor="city"> Şehir Seç </label>
        <select name="city" onChange={(e) => e.target.value && handleChangeSeletedCity(e.target.value)} className="text-black h-full mb-2 md:mb-0 ml-2 px-2 py-2 w-48 rounded-xl">
          <option value="">Şehir Seçiniz...</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cityName"> Şehir Adı</label>
        <input name="cityName" ref={cityTextRef} type="text" className="text-black ml-2 pl-6 h-8 md:h-full rounded-xl md:ml-4" />
        <button
          onClick={() => cityTextRef.current.value && handleChangeSeletedCity(cityTextRef.current.value)}
          className=" bg-gray-900 text-white ml-1 md:ml-4 px-8 py-2 rounded-xl border border-white hover:bg-black hover:border-blue-500 active:border-red-500"
        >
          Bul
        </button>
      </div>
    </div>
  );
}

export default Form;
