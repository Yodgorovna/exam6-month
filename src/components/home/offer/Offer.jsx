import React from "react";

export const Offer = () => {
  return (
    <div className="container flex justify-between items-center pb-[190px]">
      <div className="bg-[url('/offer/natural.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-fifth text-[20px] font-[400] font-third mb-[5px]">
          Natural!!
        </p>
        <h1 className="text-fifth font-primary text-[40px] font-[800]">
          Get Garden Fresh Fruits
        </h1>
      </div>
      <div className="bg-[url('/offer/offer.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-secondary text-[20px] font-third font-[400] mb-[5px]">
          Offer!!
        </p>
        <h1 className="text-primary font-primary text-[40px] font-[800]">
          Get 10% off on Vegetables
        </h1>
      </div>
    </div>
  );
};
