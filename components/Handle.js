import { urlFor } from "../client";
import { motion } from "framer-motion";

const handleAnimation = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Handle = ({ handle }) => {
  return (
    <div>
      <div className=" px-5 2xl:px-0 py-[50px] max-w-[1200px] mx-auto 2xl:max-w-[1440px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 2xl:gap-20 lg:items-center">
          <div className="lg:flex-1">
            <h3 className="text-[26px] leading-[32px] text-white font-semibold mb-4 lg:text-[32px] lg:leading-[40px] 2xl:text-[54px] 2xl:leading-[70px] 2xl:mb-[30px]">
              You do the business, we'll handle the money.
            </h3>
            <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] pb-5 lg:pr-[30px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-[30px]">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>

            <a
              href="#"
              className="btn-gradient text-[#00040E] text-[16px] leading-[24px] py-4 px-8 rounded-lg inline-block font-semibold 2xl:text-[18px] 2xl:leading-[26px]"
            >
              Get Started
            </a>
          </div>

          <div className="lg:flex-1">
            <motion.div
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 gap-3 md:gap-2"
            >
              {handle.map((item, ind) => (
                <motion.div
                  variants={handleAnimation}
                  key={item._id}
                  className={`flex flex-col w-fit p-[22px] rounded-2xl md:flex-row md:items-center ${
                    item.title === "100% Secured" ? "handle-gradient" : ""
                  }`}
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-[rgba(9,151,124,0.1)] rounded-full mr-5 mb-3 md:mb-0">
                    <img
                      src={urlFor(item.image).url()}
                      alt="Star"
                      className="w-[22px] h-[22px]"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-[16px] leading-[24px] text-white font-semibold mb-1 2xl:text-[18px] 2xl:leading-[28px] 2xl:mb-2">
                      {item.title}
                    </h5>
                    <p className="text-[16px] leading-[24px] font-normal text-[rgba(255,255,255,0.7)] 2xl:text-[18px] 2xl:leading-[28px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handle;
