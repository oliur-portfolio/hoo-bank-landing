import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const getStarted = {
  initial: {
    y: -1000,
  },

  animate: {
    y: 0,

    transition: {
      delay: 0.6,
      duration: 0.9,
      type: "spring",
    },
  },
};

const getStartedMove = {
  initial: {},

  animate: {
    x: [25, 0, 25],

    transition: {
      delay: 0.6,
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const homeHand = {
  initial: {
    y: 0,
    x: 400,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 1.1,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const heroText = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex h-[800px] md:h-screen 2xl:max-w-[1440px] xl:max-w-[1200px] mx-auto pt-[120px] lg:pt-0 lg:items-center">
        {/* Content Gradient */}
        <div className="next-gradient w-[195px] h-[250px] absolute top-[130px] left-[50px]"></div>
        {/* Content Gradient */}

        {/* Hero Image */}
        <div className="h-[325px] absolute bottom-0 right-0 w-[80%] md:w-[400px] md:h-[460px] lg:bottom-auto lg:top-[50%] lg:translate-y-[-50%] xl:w-[600px] xl:h-[620px] 2xl:w-[700px] 2xl:h-[730px]">
          <motion.div
            variants={homeHand}
            initial="initial"
            animate="animate"
            className="relative w-full h-full"
          >
            <Image src="/images/robot.png" layout="fill" objectFit="cover" />
            <div className="absolute top-0 right-0 robot-gradient w-full h-full -z-10"></div>
          </motion.div>
        </div>
        {/* Hero Image */}

        {/* Hero Content */}
        <div className="xl:flex-[0.6] flex-1 relative px-5 2xl:px-0">
          {/* Get Started */}
          <motion.div variants={getStarted} initial="initial" animate="animate">
            <motion.div
              variants={getStartedMove}
              className="absolute top-[50px] right-[40px] w-[90px] h-[90px] border-2 rounded-full flex items-center justify-center border-cyan-200 md:right-auto md:left-[500px] md:top-[120px] md:w-[110px] md:h-[110px] lg:left-[420px] lg:top-[80px] xl:top-[70px] xl:left-[400px] 2xl:top-[90px] 2xl:left-[470px] 2xl:w-[140px] 2xl:h-[140px]"
            >
              <a
                href="#"
                className="text-[14px] leading-[22px] font-medium md:text-[16px] md:leading-[24px] 2xl:text-[18px] xl:leading-[28px]"
              >
                <span className="text-gradient">Get</span>
                <img
                  className="inline-block"
                  src="/images/arrow-up.svg"
                  alt=""
                />
                <span className="block text-gradient">Started</span>
              </a>
            </motion.div>
          </motion.div>
          {/* Get Started */}

          <div className="flex items-center mb-[20px] discount-gradient w-fit px-[5px] pr-3 py-[1px]">
            <div className="relative h-10 w-10">
              <Image
                src="/images/Discount.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <p className="text-[rgba(255,255,255,0.6)] text-[14px] font-normal">
              <span className="text-white">20%</span> DISCOUNT FOR
              <span className="text-white">1 MONTH</span> ACCOUNT
            </p>
          </div>

          <h1 className="md:text-7xl lg:text-6xl text-[36px] font-semibold md:leading-[90px] lg:leading-[70px] leading-[44px] 2xl:text-7xl 2xl:leading-[90px] 2xl:mb-8">
            The Next
            <span className="block text-gradient">Generation</span>
            Payment Method.
          </h1>

          <p className="text-[16px] leading-[26px] xl:text-[18px] xl:leading-[30px] font-[400] text-[rgba(255,255,255,0.7)] max-w-[483px] mt-[15px]">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        {/* Hero Content */}
      </div>
    </div>
  );
};

export default Hero;
