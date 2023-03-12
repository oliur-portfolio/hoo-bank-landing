import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const staggerMenu = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const Navbar = ({ nav }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full z-50 ${
        mobileNav && "bg-[#040713] h-screen !fixed"
      }`}
    >
      <div className="2xl:max-w-[1440px] xl:max-w-[1200px] mx-auto 2xl:px-0 px-5 py-5">
        <nav className="flex flex-col lg:flex-row lg:items-center justify-between relative">
          <div className="relative h-12 w-36">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          <motion.ul
            variants={staggerMenu}
            initial="initial"
            animate="animate"
            className="lg:flex hidden"
          >
            {nav.map((nav, index) => (
              <motion.li
                variants={fadeInUp}
                key={index}
                className="ml-12 first:ml-0"
              >
                <Link href={nav.path}>
                  <a
                    onClick={() => setActive(nav.name)}
                    className={`text-[18px] uppercase hover:text-white ${
                      active === nav.name
                        ? "text-white"
                        : "text-[rgba(255,255,255,0.7)]"
                    }`}
                  >
                    {nav.name}
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <button
            onClick={() => setMobileNav(!mobileNav)}
            className="lg:hidden block absolute top-[13px] right-0"
          >
            <div className="w-9 h-6 flex flex-col justify-between">
              <div className="w-full h-[2px] bg-white"></div>
              <div className="w-full h-[2px] bg-white"></div>
              <div className="w-full h-[2px] bg-white"></div>
            </div>
          </button>
        </nav>
      </div>

      {mobileNav && (
        <ul className="flex flex-col items-center justify-center lg:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {nav.map((nav, ind) => (
            <li key={ind} className="mb-10 last:mb-0">
              <Link href={nav.path}>
                <a className="text-white font-semibold text-2xl uppercase">
                  {nav.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
