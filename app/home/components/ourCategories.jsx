import React from "react";
import Link from "next/link";
import { Categories } from "@/app/utils/data/data";

const OurCategories = () => {
  return (
    <div>
      <h2 className="text-[20px] max-md:text-[18px] text-black font-medium mb-[20px]">
        Category
      </h2>
      <div className="flex flex-wrap gap-[20px] max-md:gap-[12px]">
        {Categories.map((item) => (
          <Link
            key={item?.id}
            href={`/${item?.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\s]/gi, "-")}`}
            className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black border-[#FBD098] hover:border-[#001F4E] text-[16px] max-md:text-[14px] border-2 p-[8px_14px] max-md:p-[4px_8px] rounded-full font-medium"
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurCategories;
