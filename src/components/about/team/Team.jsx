import React from "react";
import { Instagram } from "../../../assets/footer/instagram";
import { Facebook } from "../../../assets/footer/facebook";
import { Twitter } from "../../../assets/footer/twitter";
import { Pinterest } from "../../../assets/footer/pinterest";

export const Team = () => {
  return (
    <div className="container pt-[180px] pb-[180px]">
      <p className="text-[30px] font-third font-[400px] text-secondary text-center mb-[8px]">
        Team
      </p>
      <h1 className="text-[50px] font-[800px] text-primary text-center mb-[16px]">
        Our Organic Experts
      </h1>
      <p className=" w-[855px] ml-auto mr-auto text-[18px] font-[400px] text-seventh text-center mb-[30px]">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <ul className="flex items-center justify-between">
        <li className="border-[2px] border-fifth bg-fifth w-[450px] rounded-[30px]">
          <img className="mb-[35px]" src="/user1.png" alt="img" />
          <h1 className="text-[25px] font-[800px] text-primary  ml-[20px] mb-[3px]">
            Giovani Bacardo
          </h1>
          <div className="flex justify-between mr-[20px] mb-[20px]">
            <p className="text-[18px] font-[400px] font-third text-secondary ml-[20px] mb-[20px]">
              Farmer
            </p>
            <div className="flex  gap-3">
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Pinterest />
              </a>
            </div>
          </div>
        </li>
        <li className="border-[2px] border-sixth bg-sixth w-[450px] rounded-[30px]">
          <img className="mb-[35px]" src="/user2.png" alt="img" />
          <h1 className="text-[25px] font-[800px] text-[Designer]  ml-[20px] mb-[3px]">
            Marianne Loreno
          </h1>
          <div className="flex justify-between mr-[20px] mb-[20px]">
            <p className="text-[18px] font-[400px] font-third text-secondary ml-[20px] mb-[20px]">
              Designer
            </p>
            <div className="flex  gap-3">
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </li>
        <li className="border-[2px] border-sixth bg-sixth w-[450px] rounded-[30px]">
          <img className="mb-[35px]" src="/user3.png" alt="img" />
          <h1 className="text-[25px] font-[800px] text-primary  ml-[20px] mb-[3px]">
            Riga Pelore
          </h1>
          <div className="flex justify-between mr-[20px] mb-[20px]">
            <p className="text-[18px] font-[400px] font-third text-secondary ml-[20px] mb-[20px]">
              Farmer
            </p>
            <div className="flex  gap-3">
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
