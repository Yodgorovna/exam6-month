import React from "react";
import { Button } from "../../button";
import { Aerrow } from "../../../assets/hero/aerrow";

export const Hero = () => {
  return (
    <div className="pb-[100px]">
      <div className="bg-[url('/headerImg.png')] bg-cover bg-center pt-[250px] pb-[250px] mx-auto">
        <div className="container">
          <h1 className="font-[400px] font-third text-[20px] text-secondary mb-[8px]">
            100% Natural Food
          </h1>
          <p className="text-5xl font-extrabold font-primary w-[370px] mb-[70px] text-primary">
            Choose the best healthier way of life
          </p>
          <span className="flex items-center  gap-4 w-[220px] pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-primary bg-third rounded-[16px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-white">
            <Button>
              <div className="font-primary font-bold"> Explore Now</div>
            </Button>
            <span>
              <Aerrow />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
