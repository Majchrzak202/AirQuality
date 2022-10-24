import React, { useState, useEffect } from "react";
import Search from "./Search";
import AirQuality from "./AirQuality";
import Info from "./Info";
import axios from "axios";

const Home = () => {
  const [airQuality, setAirQuality] = useState("undefined");

  useEffect(() => {
    const fetchAirQuality = async () => {
      const response = await fetch(
        "https://api.waqi.info/feed/warsaw/?token=8dde7e426c6eefd84e519d2a317ad79951d5d65e"
      );
      const data = await response.json();
      console.log(data);
      setAirQuality(data);
    };

    fetchAirQuality();
  }, []);

  const fetchWeather = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b86bdebd53631bfc354c2456f5b2f221"
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <Search />
      <button onClick={fetchWeather}>fetch</button>
      <Info />
      <AirQuality airQuality={airQuality} />
    </div>
  );
};

export default Home;
