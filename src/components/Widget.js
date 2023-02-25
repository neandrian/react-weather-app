import React from "react";

function Widget() {
  return (
    <div className="">
      <div className="flex flex-col columns-3 items-center p-8 rounded-md w-full sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Dubai</h2>
          <p className="text-sm dark:text-gray-400">July 29</p>
        </div>
        <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
        <div className="mb-2 text-3xl font-semibold">
          {" "}
          32°
          <span className="mx-1 font-normal">/</span>20°
        </div>
        <p className="dark:text-gray-400">Partly cloudy</p>
      </div>
    </div>
  );
}

export default Widget;
