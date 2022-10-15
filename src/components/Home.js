import React from "react";
import Search from "./Search";
import AirQuality from "./AirQuality";
import Info from "./Info";

const Home = () => {
  return (
    <div>
      <Search />
      <Info/>
      <AirQuality />
    </div>
  );
};

export default Home;
