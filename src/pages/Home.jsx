import React from "react";
import Video from "../components/home/Video";
import HomeHeroTop from "../components/home/HomeHeroTop";
import HomeBottom from "../components/home/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroTop />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
