import React from "react";
import Link from "next/link";

const BreadCrumbs = ({ linkData, page }) => {
  return (
    <div className="text-center p-[40px_100px_0] max-lg:p-[40px_80px_0] max-md:p-[30px_20px_0]">
      <div className="pb-[10px] border-b border-[#D9D9D9] flex flex-wrap items-center">
        <Link
          className="capitalize text-black text-[16px] max-md:text-[14px] font-medium text-start"
          href={"/"}
        >
          Home
        </Link>
        <p className="capitalize text-black text-[16px] max-md:text-[14px] font-medium text-start">
          /Categories/
        </p>
        {linkData ? (
          <Link
            href={"/" + linkData}
            className="capitalize text-black text-[16px] max-md:text-[14px] font-medium text-start"
          >
            {linkData?.replace(/\s+/g, " ").replace(/[^\w\s]/gi, " ")}/
          </Link>
        ) : null}
        {page ? (
          <p className="text-black text-[16px] max-md:text-[14px] font-medium text-start">
            {page}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default BreadCrumbs;
