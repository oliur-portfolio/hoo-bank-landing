import React from "react";
import { motion } from "framer-motion";

const dataItem = [
  {
    number: "3800+",
    name: "User Active",
  },
  {
    number: "230+",
    name: "TRUSTED BY COMPANY",
  },
  {
    number: "$230M+",
    name: "TRANSACTION",
  },
];

const dateAnimation = {
  initial: {
    y: 30,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Data = () => {
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="mx-5 mt-[110px] mb-[50px]">
        <motion.div
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: false, amount: 1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-5 justify-center items-center text-center md:grid-cols-3 md:gap-0"
        >
          {dataItem.map((item, index) => (
            <motion.div
              variants={dateAnimation}
              key={index}
              className="flex justify-center items-center relative"
            >
              {item.name === "TRANSACTION" ? (
                ""
              ) : (
                <div className="hidden md:block absolute top-[50%] right-0 w-[1px] h-[40%] bg-[rgba(255,255,255,0.6)] translate-y-[-50%]"></div>
              )}

              <h3 className="text-[26px] leading-[36px] font-semibold mr-4 xl:text-[34px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[53px]">
                {item.number}
              </h3>
              <p className="text-[16px] leading-[22px] text-gradient font-normal uppercase xl:text-[18px] xl:leading-[25px] 2xl:text-[20px] 2xl:leading-[27px]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Data;
