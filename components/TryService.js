import React from "react";

const TryService = () => {
  return (
    <div className="py-[50px] px-5 max-w-[1200px] mx-auto 2xl:max-w-[1440px] 2xl:py-[80px] xl:px-0">
      <div className="flex flex-col gap-5 try-gradient py-[30px] px-[20px] md:flex-row md:items-center md:justify-between md:px-[50px] md:py-[50px] 2xl:py-[72px] 2xl:px-[97px]">
        <div className="lg:flex-[0.7] 2xl:flex-1">
          <h3 className="text-[26px] leading-[32px] text-white font-semibold mb-4 lg:text-[32px] lg:leading-[40px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:mb-[20px] lg:max-w-[470px] w-full lg:mr-[100px] 2xl:mr-[200px] md:mb-[20px] lg:mb-[20px] 2xl:max-w-full">
            Let's try our service now!
          </h3>

          <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] pb-0 lg:pr-[30px] 2xl:text-[18px] 2xl:leading-[28px]  md:max-w-[400px] md:p-0 lg:text-lg lg:max-w-full 2xl:max-w-[600px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <a
          href="#"
          className="btn-gradient text-[#00040E] text-[16px] leading-[24px] py-4 px-8 rounded-lg font-semibold 2xl:text-[18px] 2xl:leading-[26px] max-w-[170px] flex justify-center items-center md:h-[56px]"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default TryService;
