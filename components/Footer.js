import React from "react";
import Image from "next/image";
import Social from "./Social";

const useful = [
  {
    name: "Content",
  },
  {
    name: "How it Works",
  },
  {
    name: "Create",
  },
  {
    name: "Explore",
  },
  {
    name: "Terms & Services",
  },
];

const community = [
  {
    name: "Help Center",
  },
  {
    name: "Partners",
  },
  {
    name: "Suggestions",
  },
  {
    name: "Blog",
  },
  {
    name: "Newsletters",
  },
];

const partner = [
  {
    name: "Our Partner",
  },
  {
    name: "Become a Partner",
  },
];

export const Footer = () => {
  return (
    <div className="">
      <div className="px-5 py-[50px] max-w-[1200px] 2xl:max-w-[1440px] mx-auto flex flex-col gap-[40px] xl:flex-row xl:pr-10 xl:px-0">
        <div className="xl:flex-[0.6] 2xl:flex-[0.7]">
          <div className="relative w-[200px] h-[60px] mb-5 2xl:w-[250px] 2xl:h-[72px]">
            <Image
              src="/images/logo.svg"
              alt="footer logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <p className="text-base text-white/70 2xl:text-lg 2xl:max-w-[312px] 2xl:ml-5">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3 xl:flex-1">
          <div className="">
            <h3 className="text-white text-lg font-medium mb-5">
              Usefull Links
            </h3>
            <ul className="space-y-[12px]">
              {useful.map((item, ind) => (
                <li key={ind}>
                  <a href="#" className="font-normal text-base text-white/70">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="text-white text-lg font-medium mb-5">Community</h3>
            <ul className="space-y-[12px]">
              {community.map((item, ind) => (
                <li key={ind}>
                  <a href="#" className="font-normal text-base text-white/70">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="text-white text-lg font-medium mb-5">Partner</h3>
            <ul className="space-y-[12px]">
              {partner.map((item, ind) => (
                <li key={ind}>
                  <a href="#" className="font-normal text-base text-white/70">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 max-w-[1200px] 2xl:max-w-[1440px] mx-auto xl:px-0">
        <Social />
      </div>
    </div>
  );
};
