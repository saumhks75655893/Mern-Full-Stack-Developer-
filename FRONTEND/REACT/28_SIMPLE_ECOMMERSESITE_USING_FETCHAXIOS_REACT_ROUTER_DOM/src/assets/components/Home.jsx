import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative object-cover w-full h-[515px]">
        <div className="w-[100%] h-[100%] bg-black/20 absolute flex items-center justify-center text-[2rem] uppercase :hover:color-red font-bold text-white flex-col">
          <h1 className="text-gray-700  rounded-xl text-[5rem]">
            Everything You Need
          </h1>
          <h1 className="text-blue-700 text-[3rem]">
            One Click Away Discover Trends.
          </h1>
          <h1 className="text-red-500 text-[2rem]">
            Shop Happiness. Your Style Starts Here
          </h1>
        </div>
        <video
          muted
          autoPlay
          loop
          className="w-[100%] h-[60%] border-none outline-none"
          type="video/mp4"
          src="https://cdn.pixabay.com/video/2024/09/24/233043_large.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="w-full h-screen"></div>;
      <div className="w-full h-screen"></div>; */}
    </>
  );
};

export default Home;
