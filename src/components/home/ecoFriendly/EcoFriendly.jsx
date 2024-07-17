import React from "react";

export const EcoFriendly = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center ">
      <div className="w-full sm:w-[900px]">
        <img
          className="w-full h-auto rounded-lg"
          src="/EcoFriendly.png"
          alt="img"
        />
      </div>
      <div className="container pt-10 pb-10 pl-10 pr-10  w-full sm:w-[700px] rounded-lg bg-nineth ml-[-150px]">
        <p className="text-egith font-third text-secondary text-xl font-medium mb-2">
          Eco Friendly
        </p>
        <h1 className="text-primary font-primary text-5xl font-extrabold mb-8 mr-6">
          Econis is a Friendly Organic Store
        </h1>
        <div>
          <h2 className="text-primary text-lg font-semibold mb-2">
            Start with Our Company First
          </h2>
          <p className="text-seventh text-base mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div>
          <h2 className="text-seventh text-lg font-semibold mb-2">
            Learn How to Grow Yourself
          </h2>
          <p className="text-primary text-base mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div>
          <h2 className="text-seventh text-lg font-semibold mb-2">
            Farming Strategies of Today
          </h2>
          <p className="text-primary text-base mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};
