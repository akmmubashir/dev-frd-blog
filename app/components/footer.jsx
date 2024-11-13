import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlastoreIcon from "@/app/assets/common/playstore.svg";
import ApplestoreIcon from "@/app/assets/common/applestore.svg";
import { Logo } from "./svgIcon";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3B3B3B] p-[60px] grid grid-cols-12 gap-x-[20px] max-sm:gap-[20px_0] max-sm:p-[30px_20px]">
        <div className="col-span-4 max-sm:col-span-12">
          <Logo className={"w-[220px] h-fit"} color={"fill-[#fff]"} />
          <p className="text-[16px] max-md:text-[14px] text-white my-[15px] pe-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center">
            <Image
              src={PlastoreIcon}
              alt="PlaystoreIcon"
              className="w-fit h-[40px] me-[10px]"
            />
            <Image
              src={ApplestoreIcon}
              alt="ApplestoreIcon"
              className="w-fit h-[40px]"
            />
          </div>
        </div>
        <div className="col-span-8 max-sm:col-span-12">
          <h6 className="text-[16px] font-medium text-white mb-2">
            Quick Links
          </h6>
          <div className="grid grid-cols-12 gap-2">
            {[
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
              "Rent a Car in Dubai",
            ].map((item, index) => (
              <div key={index} className="col-span-3 max-md:col-span-6">
                <Link
                  prefetch
                  className="text-[#e4e4e4] text-[14px] hover:text-white"
                  href={"/"}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#2A2A2A] flex max-sm:flex-col-reverse p-[20px_100px] max-sm:p-[20px_15px]">
        <p className="text-[14px] text-white me-auto max-sm:m-auto">
          © 2024 All rights reserved
        </p>
        <p className="text-[14px] text-white max-sm:mb-[20px]">
          English | ‏العربية‏ | Français | Dutch | русский | Türkçe | Español |
          Chinese | Italian | German
        </p>
      </div>
    </>
  );
};

export default Footer;
