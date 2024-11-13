import React from "react";
import { postsLists } from "@/app/utils/data/posts";
import Image from "next/image";
import Link from "next/link";

const TopPosts = () => {
  return (
    <div className="px-[100px] max-lg:px-[80px] max-md:px-[20px] grid grid-cols-12 gap-[40px] max-sm:gap-[30px_0]">
      {postsLists.map((item) => (
        <Link
          href={`/${item?.category
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}/${item?.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}`}
          key={item?.id}
          className="col-span-4 max-lg:col-span-6 max-md:col-span-full rounded-[12px] overflow-hidden relative"
        >
          <Image
            src={item?.thumbnail}
            alt={
              item?.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\s]/gi, "-")
                .replace(/-+/g, "-") + "-thumbnail-img"
            }
            className="w-full"
          />
          <div className="topPostsBgG bg-red-200 absolute bottom-0 h-full w-full"></div>
          <div className="absolute bottom-0 z-10 text-white p-[20px]">
            <h2 className="text-white text-[20px] max-md:text-[18px] font-medium line-clamp-2 mb-[20px]">
              {item?.title}
            </h2>
            <div className="flex flex-wrap gap-[8px] h-fit">
              <div className="bg-[#F9BD6E] flex items-center gap-[6px] rounded-full p-[4px] h-fit">
                <div className="">
                  <div className="w-[24px] h-[24px] rounded-full">
                    <Image
                      src={item?.author?.img}
                      alt={
                        item?.author.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^\w\s]/gi, "-")
                          .replace(/-+/g, "-") + "-author-img"
                      }
                      className="w-full"
                    />
                  </div>
                </div>
                <p className="text-[12px] text-white">{item?.author.name}</p>
              </div>
              <div className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black hover:text-white border-2 border-[#FBD098] hover:border-[#001F4E] rounded-full flex justify-center items-center p-[4px_10px]">
                <p className="text-[12px] text-black ms-auto">
                  {item?.category}
                </p>
              </div>
              <div className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black hover:text-white border-2 border-[#FBD098] hover:border-[#001F4E] rounded-full flex justify-center items-center p-[4px_10px]">
                <p className="text-[12px] text-black ms-auto">8 min read</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopPosts;
