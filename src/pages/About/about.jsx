import React from "react";
import { AboutHero } from "../../components/about/aboutHero";
import { AboutUs } from "../../components/about/aboutUs";
import { WhyChooseUs } from "../../components/about/whyChooseus";
import { Team } from "../../components/about/team";
import { aboutData } from "../../data/about";

export const About = () => {
  return (
    <div>
      <section>
        <AboutHero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <div className="pb-[140px]">
          <div className="pt-[180px] pb-[180px] bg-primary">
            <p className="font-[400px] text-[30px] text-center text-secondary mb-[8px]">
              About Us
            </p>
            <h1 className="font-[800px] text-[50px] text-center text-sixth mb-[70px]">
              What We Offer for You
            </h1>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-[100px]">
              {aboutData.slice(0, 4).map((item) => (
                <div key={item.id} className="  rounded-lg  w-[330px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-[30px] mb-[20px] "
                  />
                  <h1 className="text-sixth text-center font-medium text-[18px] mb-[15px]">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
