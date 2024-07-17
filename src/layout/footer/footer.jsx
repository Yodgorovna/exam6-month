import React from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Facebook } from "../../assets/footer/facebook";
import { Twitter } from "../../assets/footer/twitter";
import { Pinterest } from "../../assets/footer/pinterest";
import { Instagram } from "../../assets/footer/instagram";
import { Logo } from "../../assets/logo";

export const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="pt-[105px] pb-[105px] pl-[70px] pr-[70px] bg-[url('/footerBackground.png')] bg-cover bg-center mb-[100px] rounded-[30px]">
        <ul className="flex flex-col lg:flex-row justify-between items-center">
          <li>
            <h1 className="w-full lg:w-[350px] text-nineth text-[42px] font-[800] mb-[5px] text-center lg:text-left">
              Subscribe to our Newsletter
            </h1>
          </li>
          <li className="flex flex-col lg:flex-row justify-between items-center gap-[6px]">
            <form className="w-full lg:w-[350px] mb-4 lg:mb-0">
              <Input
                className="pt-[20px] pb-[20px] w-full"
                type="email"
                placeholder="Your Email Address"
              />
            </form>
            <span className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-sixth bg-primary rounded-[16px]  hover:bg-eigth hover:text-nineth hover:text-ninth hover:transform hover:scale-105">
              <Button>Subscribe</Button>
            </span>
          </li>
        </ul>
      </div>
      <div className="pb-[190px] flex flex-col lg:flex-row justify-between gap-[50px] lg:ml-[150px]">
        <ul>
          <li>
            <h1 className="font-[700] text-[30px] text-primary mb-[30px] text-center lg:text-end">
              Contact Us
            </h1>
            <div className="mb-[20px] text-center lg:text-right text-seventh">
              <a href="#">
                <p className="w-full lg:w-[280px] font-[700] text-[18px] mb-[10px]">
                  Email
                </p>
                <p className="w-full lg:w-[280px] font-[700] text-[18px]">
                  needhelp@Organia.com
                </p>
              </a>
            </div>
            <div className="mb-[20px] text-center lg:text-right text-seventh">
              <a href="#">
                <p className="w-full lg:w-[280px] font-[700] text-[18px]">
                  Phone
                </p>
                <p className="w-full lg:w-[280px] font-[700] text-[18px]">
                  666 888 888
                </p>
              </a>
            </div>
            <div className="text-center lg:text-right textt-seventh">
              <a href="#">
                <p className="w-full lg:w-[280px] font-[700] text-[18px] text-seventh">
                  Address
                </p>
                <p className="w-full lg:w-[280px] font-[700] text-[18px] text-seventh">
                  88 road, borklyn street, USA
                </p>
              </a>
            </div>
          </li>
        </ul>
        <div className="h-96 border-black "></div>
        <ul className="text-center lg:text-left text-seventh">
          <li className="w-full lg:w-[400px]">
            <a href="#">
              <Logo />
            </a>
            <div className="mb-[20px]">
              <p className="w-full lg:w-[280px] font-[400] text-[11px] text-seventh mb-[40px] mx-auto lg:mx-0">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
              <ul className="flex justify-center  lg:justify-start items-center gap-3 w-[280px] text-seventh mx-auto lg:mx-0">
                <li>
                  <a href="#">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Pinterest />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul>
          <li className="w-full lg:w-[540px]">
            <a href="#">
              <p className="font-[700] text-[30px] text-primary mb-[30px] text-center lg:text-left">
                Utility Pages
              </p>
            </a>
            <div className="mb-[20px]">
              <ul className="text-center lg:text-left">
                <li>
                  <a href="#">
                    <p className="text-seventh font-[400] text-[18px] mb-[20px]">
                      Style Guide
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p className="text-seventh font-[400] text-[18px] mb-[20px]">
                      404 Not Found
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p className="text-seventh font-[400] text-[18px] mb-[20px]">
                      Password Protected
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p className="text-seventh font-[400] text-[18px] mb-[20px]">
                      Licences
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p className="text-seventh font-[400] text-[18px] mb-[20px]">
                      Changelog
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <p className="text-seventh text-[18px] font-[400] text-center mb-[20px]">
        Copyright © Organick | Designed by VictorFlow Templates - Powered by
        Webflow
      </p>
    </div>
  );
};
