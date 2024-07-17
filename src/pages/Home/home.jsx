import React from "react";
import { Hero } from "../../components/home/hero";
import { Offer } from "../../components/home/offer";
import { About } from "../../components/home/about";
import { Aerrow } from "../../assets/hero/aerrow";
import { productData } from "../../data/product";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Testimonial } from "../../components/home/testimonial";
import { offerData } from "../../data/offer";
import { EcoFriendly } from "../../components/home/ecoFriendly";
import { Cart } from "../../components/home/cart";
import { newsData } from "../../data/News";
export const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <Offer />
      </section>

      <section>
        <About />
      </section>

      <section>
        <div className="container mx-auto pb-[150px]">
          <p className="font-normal text-3xl text-center font-third text-secondary mb-8">
            Categories
          </p>
          <h1 className="font-bold text-4xl text-center text-primary mb-[70px]">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-100">
            {productData.slice(0, 8).map((item) => (
              <Link to={`/products/shopsingle/${item.id}`} key={item.id}>
                <div className="p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-300 bg-nineth">
                  <h1 className="font-semibold text-sm bg-primary w-[80px] text-center rounded-lg text-nineth mb-20">
                    {item.category}
                  </h1>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h1 className="font-bold text-lg text-primary mb-2">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold text-primary">
                        ${item.currentPrice}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-seventh line-through">
                          ${item.originalPrice}
                        </p>
                      )}
                    </div>
                    <p className="text-orange-500">{item.rating}★</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <span className="bg-primary rounded-lg font-semibold py-4 px-8  text-nineth text-sm  flex items-center gap-4 hover:bg-eigth hover:text-nineth hover:text-ninth hover:transform hover:scale-105">
              <Button>Load More</Button>
              <span>
                <Aerrow />
              </span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <Testimonial />
      </section>

      <section className="py-[200px] bg-primary ">
        <div className="container ">
          <ul className="flex items-center justify-between">
            <li>
              <p className="font-[400px] font-third text-[36px] text-secondary mb-[8px]">
                Offer
              </p>
              <h1 className="font-[800px] text-[50px] text-nineth mb-[70px]">
                We Offer Organic For You
              </h1>
            </li>
            <li>
              <span className=" flex items-center gap-4 pt-[20px] pb-[20px] pl-[40px] pr-[40px] bg-third text-primary rounded-[16px] font-[500px] text-[16px] ml-[600px]  hover:primary hover:text-nineth hover:text-ninth hover:transform hover:scale-105">
                <Button>Explore Now</Button>
                <span>
                  <Aerrow />
                </span>
              </span>
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
            {offerData.map((item) => (
              <div
                key={item.id}
                className="bg-nineth p-6 rounded-lg shadow-md relative"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg my-16"
                />
                <p className="absolute top-[-0px]  bg-primary text-white font-medium text-sm pt-[4px] mt-[15px] pb-[4px] pl-[8px] pr-[8px] rounded-[5px]">
                  {item.category}
                </p>
                <h1 className="text-primary text-xl font-semibold mb-2 mt-4">
                  {item.name}
                </h1>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.originalPrice && (
                      <p className="seventh line-through">
                        ${item.originalPrice}
                      </p>
                    )}
                    <p className="text-primary font-semibold">
                      ${item.currentPrice}
                    </p>
                  </div>
                  <p className="text-[#ffa858]">{item.rating}★</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <EcoFriendly />
      </section>

      <section>
        <Cart />
      </section>

      <section className="pb-[180px]">
        <div className="container mx-auto">
          <p className="text-egith font-third text-secondary text-xl font-medium mb-2 mx-16">
            News
          </p>
          <h1 className="text-primary font-primary text-5xl font-extrabold mb-8 mr-6">
            Discover weekly content about organic food, & more
          </h1>
          <div className="flex items-center justify-center gap-6 w-[600p]">
            {newsData.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-nineth p-6 rounded-lg shadow-md relative overflow-hidden w-[600px] h-[500px]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute top-[20px] right-[500px] w-[60px] h-[60px] bg-fifth text-primary font-medium text-sm pt-[20px] mt-[15px] pb-[4px] pl-[8px] pr-[8px] rounded-[50%] text-center ">
                  {item.category}
                </div>
                <h1 className="text-primary text-xl font-[400px] text-[18px] mb-[15px]">
                  {item.name}
                </h1>
                <div>
                  <div>
                    {item.title && (
                      <p className="font-[800px] text-[17px] mb-[4px]">
                        {item.title}
                      </p>
                    )}
                    <p className="text-seventh text-[20px] font-[400px] mb-[15px]">
                      {item.text}
                    </p>
                    <span className=" w-[220px] flex  items-center gap-4 pt-[15px] pb-[15px] pl-[40px] pr-[30px] bg-third text-primary rounded-[16px] font-[500px] text-[16px]  hover:bg-eigth hover:text-nineth hover:text-ninth hover:transform hover:scale-105">
                      <Button>Read More</Button>
                      <span>
                        <Aerrow />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
