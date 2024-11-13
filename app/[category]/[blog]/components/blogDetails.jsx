import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContentTile from "./contentTile";
import KeyPoints from "./keyPoints";

const BlogDetails = ({ currentPost }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-[36px] max-md:text-[18px] text-black font-semibold">
        {currentPost?.title}
      </h1>
      <div>
        <div className="flex flex-wrap gap-[8px] h-fit">
          <div className="bg-[#F9BD6E] flex items-center gap-[6px] rounded-full p-[4px] h-fit">
            <div className="">
              <div className="w-[24px] h-[24px] rounded-full">
                <Image
                  src={currentPost?.author?.img}
                  alt={
                    currentPost?.author.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w\s]/gi, "-")
                      .replace(/-+/g, "-") + "-author-img"
                  }
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-[14px] max-sm:text-[12px] text-white">
              {currentPost?.author.name}
            </p>
          </div>
          <Link
            href={`/${currentPost?.category
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\s]/gi, "-")
              .replace(/-+/g, "-")}`}
            className="bg-[#FEF4E8] hover:bg-[#c3dbff] text-black hover:text-white  border-2 border-[#FBD098] hover:border-[#001F4E] rounded-full flex justify-center items-center p-[4px_10px] h-fit"
          >
            <p className="text-[14px] max-sm:text-[12px] text-black ms-auto">
              {currentPost?.category}
            </p>
          </Link>
          <div className="flex justify-center items-center">
            <p className="text-[14px] max-sm:text-[12px] text-black ms-auto">
              8 min read | February 21, 2024
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-[20px] overflow-hidden">
        <Image
          src={currentPost?.postImg}
          alt={currentPost?.title
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}
          className="w-full object-cover"
        />
      </div>
      <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#2A2A2A]">
        {currentPost?.description}
      </p>
      {currentPost?.content?.data1 ? (
        <ContentTile data={currentPost?.content?.data1} />
      ) : null}
      <KeyPoints data={currentPost?.content?.keyPoints} />
      {currentPost?.content?.data2 ? (
        <ContentTile data={currentPost?.content?.data2} />
      ) : null}
      {currentPost?.content?.data3 ? (
        <ContentTile data={currentPost?.content?.data3} />
      ) : null}
      {currentPost?.content?.data4 ? (
        <ContentTile data={currentPost?.content?.data4} />
      ) : null}
      {currentPost?.content?.data5 ? (
        <ContentTile data={currentPost?.content?.data5} />
      ) : null}
      {currentPost?.content?.data6 ? (
        <ContentTile data={currentPost?.content?.data6} />
      ) : null}
    </div>
  );
};

export default BlogDetails;
