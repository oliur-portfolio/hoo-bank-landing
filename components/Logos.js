import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
    <div className="p-5 max-w-[1200px] 2xl:max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 justify-items-center gap-[30px] md:grid-cols-4 md:gap-[40px]">
        <div className="relative w-[150px] h-[40px] xl:w-[190px] xl:h-[60px]">
          <Image
            src="/images/airbnb.png"
            alt="airbnb"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-[150px] h-[40px] xl:w-[190px] xl:h-[60px]">
          <Image
            src="/images/binance.png"
            alt="airbnb"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-[150px] h-[40px] xl:w-[190px] xl:h-[60px]">
          <Image
            src="/images/coinbase.png"
            alt="airbnb"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-[150px] h-[40px] xl:w-[190px] xl:h-[60px]">
          <Image
            src="/images/dropbox.png"
            alt="airbnb"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
