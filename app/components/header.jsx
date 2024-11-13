import Image from "next/image";
import React from "react";
import EnglishUK from "@/app/assets/common/english-uk.png";
import Link from "next/link";
import { EmailIcon } from "./svgIcon";

const Header = () => {
  return (
    <div className="sticky top-[0px] z-50 bg-[#28405F] p-[10px_60px] max-sm:p-[10px_20px] flex items-center overflow-hidden">
      <Link
        prefetch
        href={"mailto:info@findrentdrive.com"}
        className="flex items-center gap-[5px]"
      >
        <EmailIcon
          className={"fill-none w-[24px] h-[24px]"}
          color={"stroke-white"}
        />
        <p className="text-[16px] text-white font-normal">
          info@findrentdrive.com
        </p>
      </Link>

      <div className="ms-auto flex items-center gap-x-[15px] max-sm:gap-x-0 max-sm:hidden">
        <div className="flex">
          <button className="flex items-center gap-x-[5px] max-sm:gap-x-0 rounded-[4px] p-[6px_12px] bg-[#485C77]">
            <Image src={EnglishUK} alt="EnglishUK" className="w-[18px]" />
            <span className="text-white text-[14px] font-medium">English</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
