import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState([]);
  const [selectedCity, setSelectedCity] = useState("İstanbul");

  const values = {
    weathers,
    setWeathers,
    selectedCity,
    setSelectedCity,
  };

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export const useWeather = () => useContext(WeatherContext);
