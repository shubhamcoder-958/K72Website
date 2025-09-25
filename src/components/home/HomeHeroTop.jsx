import React from "react";
import Video from "./Video";

const HomeHeroTop = () => {
  return (
    <div className="font-inter font-medium mt-72 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        THE SPARK FOR
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        ALL
        <div className="h-[7vw] w-[16vw]  text-[11.5vw] rounded-full  -mt-5 overflow-hidden">
          <Video />
        </div>
        THING
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        CREATIVE
      </div>
    </div>
  );
};
export default HomeHeroTop;
