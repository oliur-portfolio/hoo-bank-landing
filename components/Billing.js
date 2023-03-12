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

const Billing = () => {
  return (
    <div className="relative">
      <div className="billing-gradient w-[300px] h-[300px] absolute top-[200px] left-0"></div>

      <div className=" px-5 2xl:px-0 py-[50px] max-w-[1200px] mx-auto 2xl:max-w-[1440px] pt-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 2xl:gap-20 lg:items-center">
          <motion.div
            variants={imageShow}
            initial={"initial"}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={"animate"}
            className="lg:flex-1"
          >
            <div className="grid grid-cols-1 gap-3 md:gap-2">
              <div className="relative w-full h-[330px] max-h-[600px] lg:h-[400px] xl:h-[530px] 2xl:h-[600px]">
                <Image
                  src="/images/bill.png"
                  alt="bill"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:flex-1">
            <h3 className="text-[26px] leading-[32px] text-white font-semibold mb-4 lg:text-[32px] lg:leading-[40px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:mb-[30px]">
              Easily control your billing & invoicing.
            </h3>
            <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] pb-5 lg:pr-[30px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-[30px]">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="inline-block py-2 px-5 bg-[#000] shadow-lg"
              >
                <img src="/images/apple.svg" alt="Apple" className="h-[50px]" />
              </a>

              <a
                href="#"
                className="inline-block py-2 px-5 bg-[#000] shadow-lg"
              >
                <img
                  src="/images/google.svg"
                  alt="google"
                  className="h-[50px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
