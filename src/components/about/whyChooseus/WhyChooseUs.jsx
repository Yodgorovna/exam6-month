import React from "react";
import { Button } from "../../button";
import { Aerrow } from "../../../assets/hero/aerrow";

export const WhyChooseUs = () => {
  return (
    <div className="pt-[200px] pb-[200px] bg-sixth">
      <div className="container flex justify-between">
        <div className="w-[670px] ">
          <p className="text-secondary font-third text-[30px] font-normal mb-[8px]">
            Why Choose us?
          </p>
          <h1 className="text-primary text-[50px] font-[800px] mb-[25px] w-[620px]">
            We do not buy from the open market & traders.
          </h1>
          <p className="text-seventh text-[18px] font-[400px] mb-[60px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <span className=" w-[400px] flex items-center gap-[10px] pt-[20px] pb-[20px] pl-[40px] pr-[70px] text-primary bg-fifth rounded-[30px] ">
            <span>
              <Aerrow />
            </span>
            <Button>100% Natural Product</Button>
          </span>
          <p className="text-seventh text-[18px] font-[400px] w-[400px] mt-[40px] mb-[40px]">
            Simply dummy text of the printing and typesetting industry Lorem
            Ipsum
          </p>
          <span className="  w-[400px] flex items-center gap-[10px] pt-[20px] pb-[20px] pl-[40px] pr-[90px] text-primary bg-fifth rounded-[30px] ">
            <span>
              <Aerrow />
            </span>
            <Button> Increases resistance</Button>
          </span>
        </div>
        <div>
          <img src="whoChoose.png" alt="img" />
        </div>
      </div>
      <ul className="container flex w-[1118px] justify-between mt-[100px] ">
        <li className="w-[260px] pt-[50px] pb-[19px] pl-[35px] pr-[35px] border-[5px] bg-fifth rounded-[20px] border-sixth">
          <img className="mb-[15px] ml-[40px]" src="why1.svg" alt="icon" />
          <h1 className="text-primary text-[25px] font-[800px] text-center mb-[12px]">
            Return Policy
          </h1>
          <p className="text-seventh text-[16px] font-[400px] text-center">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li className="w-[260px] pt-[50px] pb-[19px] pl-[35px] pr-[35px] border-[5px] bg-fifth rounded-[20px] border-sixth">
          <img className="mb-[15px] ml-[40px]" src="why2.svg" alt="icon" />
          <h1 className="text-primary text-[25px] font-[800px] text-center mb-[12px]">
            100% Fresh
          </h1>
          <p className="text-seventh text-[16px] font-[400px] text-center">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li className="w-[260px] pt-[50px] pb-[19px] pl-[35px] pr-[35px] border-[5px] bg-fifth rounded-[20px] border-sixth">
          <img className="mb-[15px] ml-[40px]" src="why3.svg" alt="icon" />
          <h1 className="text-primary text-[25px] font-[800px] text-center mb-[12px]">
            Support 24/7
          </h1>
          <p className="text-seventh text-[16px] font-[400px] text-center">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li className="w-[260px] pt-[50px] pb-[19px] pl-[35px] pr-[35px] border-[5px] bg-fifth rounded-[20px] border-sixth">
          <img className="mb-[15px] ml-[40px]" src="why4.svg" alt="icon" />
          <h1 className="text-primary text-[20px] font-[800px] text-center mb-[12px]">
            Secured Payment
          </h1>
          <p className="text-seventh text-[16px] font-[400px] text-center">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
      </ul>
    </div>
  );
};
