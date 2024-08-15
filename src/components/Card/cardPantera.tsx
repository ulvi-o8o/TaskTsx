import React from "react";
import { IoLogoBitcoin } from "react-icons/io5";

const CardPantera = () => {
  return (
    <div className="max-w-[315px] w-full h-[396px] m-[150px] flex flex-col justify-center items-center bg-[#262626] rounded-md">
      <img
        className="w-[285px] h-[285px] rounded-md"
        src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/08/Single-product-image1-min.jpg"
        alt=""
      />
      <div className="w-[285] h-[90px] flex flex-col justify-start">
        <h2 className="w-[285px] h-[24px] ">Flow Painting #05</h2>
        <div className="flex">
          <IoLogoBitcoin />
          <p>0,004450</p>
        </div>
      </div>
    </div>
  );
};

export default CardPantera;
