import React from "react";
import { Button } from "../../button";
import { Aerrow } from "../../../assets/hero/aerrow";

export const AboutUs = () => {
  return (
    <div className="container flex gap-[100px] mb-16 ">
      <div>
        <img className="mt-[-80px]" src="aboutUs.png" alt="img" />
      </div>
      <div className="w-[690px]">
        <p className="font-[400px] font-third text-[25px] mb-[8px] text-secondary">
          About Us
        </p>
        <h1 className="text-primary text-[50px] font-[800px] mb-[14px] w-[500px]">
          We do Creative Things for Success
        </h1>
        <p className="text-seventh text-[16px] font-[400px] mb-[15px]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <p className="text-seventh text-[16px] font-[400px] mb-[15px]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <ul className="flex gap-[10px] mb-[50px]">
          <li className="flex items-center gap-[15px]">
            <img src="aboutus1.svg" alt="img" />
            <h1 className=" w-[300px] text-primary text-[25px] font-[500px]">
              Modern Agriculture Equipment
            </h1>
          </li>
          <li className="flex items-center gap-[15px] ">
            <img src="aboutus2.svg" alt="img" />
            <h1 className=" w-[300px] text-primary text-[25px] font-[500px] ">
              No growth hormones are used
            </h1>
          </li>
        </ul>
        <span className=" w-[220px] flex items-center gap-4 pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-white  bg-primary rounded-[16px]  hover:bg-eigth hover:text-nineth hover:text-ninth hover:transform hover:scale-105">
          <Button>Explore More</Button>
          <span>
            <Aerrow />
          </span>
        </span>
      </div>
    </div>
  );
};
