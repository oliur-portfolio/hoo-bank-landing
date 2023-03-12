import React from "react";

const Social = () => {
  return (
    <div className="border-t-[1px] border-[#3F3E45] py-[30px] md:flex md:items-center md:justify-between">
      <div className="">
        <p className="text-base text-white/60 font-normal md:text-lg">
          Copyright @ 2021 HooBank. All Rights Reserved.
        </p>
      </div>

      <ul className="flex items-center mt-5 md:mt-0">
        <li className="mr-5 last:mr-0">
          <a href="#">
            <img src="/images/instagram.svg" alt="FB" />
          </a>
        </li>

        <li className="mr-5 last:mr-0">
          <a href="#">
            <img src="/images/facebook.svg" alt="FB" />
          </a>
        </li>

        <li className="mr-5 last:mr-0">
          <a href="#">
            <img src="/images/twitter.svg" alt="FB" />
          </a>
        </li>

        <li className="mr-5 last:mr-0">
          <a href="#">
            <img src="/images/linkedin.svg" alt="FB" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
