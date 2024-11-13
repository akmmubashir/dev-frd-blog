import React from "react";
import PostSmaillTile from "./postSmaillTile";
import { postsLists } from "../utils/data/posts";

const TopPicks = () => {
  return (
    <div className="bg-[#fffbf6] p-[20px_15px] flex flex-col gap-[20px] rounded-[12px] drop-shadow-md border border-[#f8e3c8]">
      <h2 className="text-black font-medium text-[18px] max-md:text-[16px]">
        Top Picks
      </h2>
      {postsLists.map((item) => (
        <PostSmaillTile key={item?.id} postData={item} />
      ))}
    </div>
  );
};

export default TopPicks;
