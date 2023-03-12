import React from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-[30px] pb-[40px]">
      <div className="max-w-[1200px] 2xl:max-w-[1440px] mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <h3 className="text-[26px] leading-[32px] text-white font-semibold mb-4 lg:text-[32px] lg:leading-[40px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:mb-[30px] lg:max-w-[470px] w-full lg:mb-0 lg:mr-[100px] 2xl:mr-[200px]">
            What people are saying about us
          </h3>
          <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] pb-5 lg:pr-[30px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-[30px] lg:max-w-[480px] lg:p-0">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className="py-[20px] !pb-0 relative lg:py-[50px] 2xl:!pb-[30px]">
          <div className="slider-bg-gradient absolute top-0 right-0 w-[400px] h-[500px] -z-50"></div>

          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
