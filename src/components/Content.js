import React, { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import Widget from "./Widget";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";

function Content() {
  const { selectedCity, weathers, setWeathers } = useWeather();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios(`${process.env.REACT_APP_API_ENDPOINT}?q=${selectedCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=tr`)
      .then((res) => {
        setWeathers(res.data.list.filter((item) => new Date(item.dt_txt).getHours() === 21));
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError(404);
        } else {
          setError(400);
        }
      })
      .finally(() => setLoading(false));
  }, [selectedCity, setWeathers]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error code={error} />;
  }

  return (
    <div className="row mx-auto">
      <div className="grid grid-cols-2 gap-4 px-2 py-8 max-w-7xl md:grid-cols-5 sm:px-6 lg:px-8">{weathers && weathers.map((weather, index) => <Widget key={index} weather={weather} />)}</div>
    </div>
  );
}

export default Content;
