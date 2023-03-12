import Image from "next/image";
import { motion } from "framer-motion";

const imageShow = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Card = () => {
  return (
    <div>
      <div className=" px-5 2xl:px-0 py-[50px] max-w-[1200px] mx-auto 2xl:max-w-[1440px] pt-10">
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-8 2xl:gap-20 lg:items-center">
          <motion.div
            variants={imageShow}
            initial="initial"
            viewport={{ once: false, amount: 0.5 }}
            whileInView="animate"
            className="lg:flex-1"
          >
            <div className="grid grid-cols-1 gap-3 md:gap-2">
              <div className="relative w-full h-[330px] max-h-[600px] xl:h-[430px] 2xl:h-[600px]">
                <Image
                  src="/images/card.png"
                  alt="Card"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:flex-1">
            <h3 className="text-[26px] leading-[32px] text-white font-semibold mb-4 lg:text-[32px] lg:leading-[40px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:mb-[30px]">
              Find a better card deal in few easy steps.
            </h3>
            <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] pb-5 lg:pr-[30px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-[30px]">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <a
              href="#"
              className="btn-gradient text-[#00040E] text-[16px] leading-[24px] py-4 px-8 rounded-lg inline-block font-semibold 2xl:text-[18px] 2xl:leading-[26px]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
