import React from "react";
import TopPicks from "./topPicks";
import { ProductsList } from "../utils/data/products";
import ProductTile from "./productTile";
import { SearchIcon } from "./svgIcon";
import { Categories } from "../utils/data/data";
import Link from "next/link";
const SideBar = ({ category, blog, currentPost }) => {
  return (
    <div className="flex flex-col gap-[30px] mb-[50px] max-md:mb-[30px]">
      {category ? (
        <div className="flex flex-col gap-[20px] w-full border border-[#F9BD6E] p-[20px_15px] rounded-[12px]">
          <div className="flex items-center max-md:flex-col max-md:items-end gap-[12px]">
            <div className="bg-[#EEEEEE] rounded-[30px] p-[8px_0_8px_10px] flex items-center gap-[10px] max-md:w-full">
              <SearchIcon className="w-[16px] h-fit" color="stroke-[#001F4E]" />
              <input
                type="text"
                placeholder="Find articles....."
                className="bg-transparent outline-none placeholder:text-black text-black text-[14px] w-full"
              />
            </div>
            <button className="bg-[#001F4E] hover:bg-black rounded-[30px] text-[14px] font-medium p-[8px_20px] text-white">
              Search
            </button>
          </div>
          <h2 className="text-black font-medium text-[18px] max-md:text-[16px]">
            Top Rentals
          </h2>
          <div className="flex flex-wrap gap-[15px] max-md:gap-[10px]">
            {Categories?.map((item) => (
              <React.Fragment key={item?.id}>
                <Link
                  href={`/${item?.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w\s]/gi, "-")
                    .replace(/-+/g, "-")}`}
                  className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black border border-[#FBD098] hover:border-[#001F4E] text-[14px] max-md:text-[12px] p-[6px_10px] max-md:p-[4px_8px] rounded-full font-medium"
                >
                  {item?.title}
                </Link>
              </React.Fragment>
            ))}
          </div>
          {blog ? (
            <>
              <h2 className="text-black font-medium text-[18px] max-md:text-[16px]">
                Top Points in this Article
              </h2>
              <div className="flex flex-col gap-[15px]">
                {[
                  currentPost?.content?.data1?.title,
                  currentPost?.content?.data2?.title,
                  currentPost?.content?.data3?.title,
                  currentPost?.content?.data4?.title,
                  currentPost?.content?.data5?.title,
                  currentPost?.content?.data6?.title,
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    {item ? (
                      <Link
                        href={"#" + item}
                        className="text-black hover:text-[#001F4E] text-[16px] max-md:text-[14px] font-medium"
                      >
                        {item}
                      </Link>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </>
          ) : null}
        </div>
      ) : null}
      <TopPicks />
      <div className="bg-black h-[100px] rounded-[10px] flex justify-center items-center">
        <h6 className="text-white font-semibold text-[30px]">AD</h6>
      </div>
      <div className="flex flex-col gap-[20px] px-2">
        <h2 className="text-black font-medium text-[18px] max-md:text-[16px]">
          Top Rentals
        </h2>
        {ProductsList.slice(0, 2).map((item) => (
          <ProductTile key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
