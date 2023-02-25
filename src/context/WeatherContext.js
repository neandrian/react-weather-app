import { createContext, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const values = {};

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export const useWeather = useContext(WeatherContext);
