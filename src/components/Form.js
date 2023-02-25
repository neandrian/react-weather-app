import React from "react";
import cities from "../data/cities.json";

function Form() {
  console.log(cities);

  return (
    <div className="flex flex-col justify-around mt-6 md:flex-row">
      <div>
        <label htmlFor="city"> Şehir Seç </label>
        <select name="city" id="" className="text-black h-full mb-2 md:mb-0 ml-2 px-2 py-2 w-48 rounded-xl">
          {cities.map((city) => (
            <option key={city.id} value={city.name} selected={city.name === "Çanakkale" ? true : false}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cityName">
          Şehir Adı
          <input name="cityName" type="text" className="ml-1 md:ml-4 py-2 h-full rounded-xl" />
        </label>
        <button className=" bg-gray-900 text-white ml-1 md:ml-4 px-8 py-2 rounded-xl border border-white">Bul</button>
      </div>
    </div>
  );
}

export default Form;
