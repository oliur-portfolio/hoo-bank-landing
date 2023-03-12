import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={600}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`p-[25px] xl:p-[60px_40px] rounded-2xl ${
              isActive && "slider-gradient"
            }`}
          >
            <img
              src="/images/quotes.svg"
              alt="quotes"
              className="mb-[30px] 2xl:h-[27px] object-contain 2xl:mb-[40px]"
            />

            <p className="mb-[20px] text-base text-white 2xl:text-lg 2xl:!leading-[32px] 2xl:mb-[30px]">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-5 2xl:w-[56px] 2xl:h-[56px]">
                <Image
                  src="/images/people01.png"
                  alt="user"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="">
                <h5 className="text-lg text-white font-normal 2xl:text-xl">
                  Herman Jensen
                </h5>
                <p className="text-base font-normal text-[#fff]/50">
                  Founder & Leader
                </p>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
