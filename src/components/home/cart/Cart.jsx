import React from "react";

export const Cart = () => {
  return (
    <div className="pb-[170px]">
      <div className="pt-[180px] pb-[180px] bg-fifth">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">
              <img src="/cartImg.png" alt="img" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/cartImg2.png" alt="img" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/cartImg3.png" alt="img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
