import Image from "next/image";
import React from "react";
import { ShareIcon, ThreeDotIcon } from "./svgIcon";
import Link from "next/link";

const PostTile = ({ postData }) => {
  return (
    <div className="grid grid-cols-12 gap-[20px] rounded-[12px] border border-[#F9BD6E] p-[20px] max-md:p-[12px] items-center">
      <div className="col-span-4 max-sm:col-span-full">
        <div className="aspect-square rounded-[12px] overflow-hidden">
          <Image
            src={postData?.thumbnail}
            alt={
              postData?.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\s]/gi, "-")
                .replace(/-+/g, "-") + "-thumbnail-img"
            }
            className="object-cover h-full"
          />
        </div>
      </div>
      <div className="col-span-8 max-sm:col-span-full flex flex-col justify-center">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-end">
            <div className="flex items-center gap-[15px]">
              <button>
                <ShareIcon
                  color={"stroke-[#000000]"}
                  className={"w-fit h-[17px]"}
                />
              </button>
              <button>
                <ThreeDotIcon
                  color={"fill-[#000000]"}
                  className={"w-fit h-[20px]"}
                />
              </button>
            </div>
          </div>
          <Link
            href={`/${postData?.category
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\s]/gi, "-")
              .replace(/-+/g, "-")}/${postData?.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\s]/gi, "-")
              .replace(/-+/g, "-")}`}
            className="text-[18px] font-medium text-black line-clamp-2 hover:text-[#2a2a2a]"
          >
            <h2 className="text-[20px] max-md:text-[16px]">
              {postData?.title}
            </h2>
          </Link>
          <p className="text-[16px] max-md:text-[14px] text-[#2a2a2a] line-clamp-2">
            {postData?.description}
          </p>
          <div className="flex flex-wrap gap-[8px] h-fit">
            <div className="bg-[#F9BD6E] flex items-center gap-[6px] rounded-full p-[4px] h-fit">
              <div className="">
                <div className="w-[24px] h-[24px] rounded-full">
                  <Image
                    src={postData?.author?.img}
                    alt={
                      postData?.author.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w\s]/gi, "-")
                        .replace(/-+/g, "-") + "-author-img"
                    }
                    className="w-full"
                  />
                </div>
              </div>
              <p className="text-[12px] text-white">{postData?.author.name}</p>
            </div>
            <Link
              href={`/${postData?.category
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\s]/gi, "-")
                .replace(/-+/g, "-")}`}
              className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black hover:text-white border-2 border-[#FBD098] hover:border-[#001F4E] rounded-full flex justify-center items-center p-[4px_10px]"
            >
              <p className="text-[12px] text-black ms-auto">
                {postData?.category}
              </p>
            </Link>
            <div className="flex justify-center items-center">
              <p className="text-[12px] text-black ms-auto">
                8 min read | February 21, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTile;
