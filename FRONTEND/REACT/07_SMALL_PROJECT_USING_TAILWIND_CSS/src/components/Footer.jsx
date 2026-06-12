import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="py-2  bg-amber-300 ">
          <footer className=" max-w-[70%] grid grid-cols-5 max-[820px]:grid-cols-3  max-[550px]:grid-cols-2 max-[340px]:grid-cols-1  max-[340px]:m-auto   gap-10  p-2 text-xl text-black/60 m-auto ">
            <h1 className="font-bold text-2xl ">
              <span className="text-amber-600 text-3xl">B</span>
              rand
            </h1>

            <div className=" flex flex-col gap-1.5 text-[19px] text-black/60 ">
              <h1 className="font-bold mb-2 text-2xl uppercase ">Company</h1>
              <a href="">Feature</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">About Us</a>
              <a href="">Feature</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">About Us</a>
            </div>

            <div className="flex flex-col gap-1.5 text-[19px] text-black/60 ">
              <h1 className="font-bold mb-2 text-2xl uppercase">Profit</h1>
              <a href="">Feature</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">About Us</a>
            </div>

            <div className="flex flex-col gap-1.5 text-[19px] text-black/60 ">
              <h1 className="font-bold mb-2 text-2xl uppercase">Licence</h1>
              <a href="">Feature</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">About Us</a>
            </div>

            <div className="flex flex-col gap-1.5 text-[19px] text-black/60 ">
              <h1 className="font-bold mb-2 text-2xl uppercase">Partners</h1>
              <a href="">Feature</a>
              <a href="">Use cases</a>
              <a href="">Integration</a>
              <a href="">About Us</a>
            </div>
          </footer>

          <div className="w-full bg-amber-700 h-0.5 my-3"></div>

          <div className="flex max-w-[60%] m-auto justify-between max-[550px]:flex-col">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              totam.
            </p>
            <div className="flex gap-2 font-bold  max-[340px]:flex-col ">
              <h1>T</h1>
              <h1>X</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
