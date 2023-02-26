import React from "react";

function Widget({ weather }) {
  const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
  const weatherDate = new Date(weather.dt_txt);

  return (
    <div className="">
      <div className={`flex flex-col columns-3 items-center  p-4 rounded-md w-full md:px-10 bg-gray-900 text-gray-100 ${weatherDate.getDate() === new Date().getDate() ? "shadow-xl shadow-blue-500" : ""}`}>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{weatherDate.toLocaleDateString()}</h2>
          <p className="text-sm text-gray-400">{days[weatherDate.getDay()]}</p>
        </div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""></img>
        <div className="mb-2 text-3xl font-semibold">
          {" "}
          {Math.round(weather.main.temp)}°<span className="mx-1 font-normal">/</span>
          {Math.round(weather.main.feels_like)}°
        </div>
        <p className="text-gray-400">{weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1)}</p>
      </div>
    </div>
  );
}

export default Widget;
