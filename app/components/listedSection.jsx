import React from "react";
import SideBar from "./sideBar";
import Listing from "./listing";
import { findCategoryByTitle } from "../utils/services/service";

const ListedSection = ({ category, categoryTitle }) => {
  const currentCategory = findCategoryByTitle(categoryTitle);
  return (
    <div className="grid grid-cols-12 p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[30px_20px] gap-[50px] max-sm:gap-[30px_0]">
      <div className="col-span-8 max-md:col-span-full">
        {category ? (
          <div className="mb-[30px]">
            <h1 className="text-[36px] max-md:text-[18px] text-black font-semibold mb-[20px] max-md:mb-[10px]">
              “{currentCategory?.title ? currentCategory?.title : "No Data"}”
            </h1>
            <p className="text-[16px] max-md:text-[14px] text-[#2a2a2a]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ) : null}
        <Listing category={category} categoryTitle={categoryTitle} />
      </div>
      <div className="col-span-4 max-md:col-span-full">
        <SideBar category={category} />
      </div>
    </div>
  );
};

export default ListedSection;
