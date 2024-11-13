import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostSmaillTile = ({ postData }) => {
  return (
    <Link
      key={postData?.id}
      href={`/${postData?.category
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\s]/gi, "-")
        .replace(/-+/g, "-")}/${postData?.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\s]/gi, "-")
        .replace(/-+/g, "-")}`}
      className="grid grid-cols-12 gap-[10px] p-[10px] rounded-[10px] border-2 border-[#ffe5c4] items-center bg-white hover:bg-gray-50"
    >
      <div className="col-span-4">
        <div className="aspect-square rounded-[10px] overflow-hidden">
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
      <div className="col-span-8 flex flex-col gap-[10px]">
        <h2 className="text-black text-[12px] line-clamp-2 font-medium">
          {postData?.title}
        </h2>
        <div>
          <button className="border border-[#FBD098] bg-transparent hover:bg-white text-black text-[10px] p-[6px] rounded-[14px] font-medium">
            Read Article
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostSmaillTile;
