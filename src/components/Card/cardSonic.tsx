import React from "react";
import { IoLogoBitcoin } from "react-icons/io5";

const CardSonic = () => {
  return (
    <div className="max-w-[315px] w-full h-[396px] m-[150px] flex flex-col justify-center items-center bg-[#262626] rounded-md">
      <img
        className="w-[285px] h-[285px] rounded-md"
        src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/08/Single-product-image3-min-720x720.jpg"
        alt=""
      />
      <div className="w-[285] h-[90px] flex flex-col justify-start">
        <h2 className="w-[285px] h-[24px] ">DrifterShoots Out</h2>
        <p>
          <IoLogoBitcoin />
          0,003952
        </p>
      </div>
    </div>
  );
};

export default CardSonic;
