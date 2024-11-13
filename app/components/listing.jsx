import React from "react";
import { postsLists } from "../utils/data/posts";
import PostTile from "./postTile";

const Listing = ({ category, categoryTitle }) => {
  const filteredPosts = postsLists.filter(
    (post) =>
      post.category
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\s]/gi, "-")
        .replace(/-+/g, "-") === categoryTitle,
  );
  return (
    <div className="flex flex-col gap-[20px]">
      {category
        ? filteredPosts.map((item) => (
            <PostTile key={item?.id} postData={item} />
          ))
        : postsLists.map((item) => <PostTile key={item?.id} postData={item} />)}
      <div className="bg-black h-[220px] rounded-[12px] flex justify-center items-center">
        <h6 className="text-white font-semibold text-[30px]">AD</h6>
      </div>
      {category
        ? filteredPosts.map((item) => (
            <PostTile key={item?.id} postData={item} />
          ))
        : postsLists.map((item) => <PostTile key={item?.id} postData={item} />)}
    </div>
  );
};

export default Listing;
