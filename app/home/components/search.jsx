import React from "react";
import { SearchIcon } from "@/app/components/svgIcon";

const Search = () => {
  return (
    <div className="flex items-center max-md:flex-col max-md:items-end gap-[20px] max-md:gap-[10px]">
      <div className="bg-[#EEEEEE] rounded-[30px] p-[16px_0_16px_20px] max-md:p-[10px_0_10px_12px] min-w-[400px] max-md:min-w-full flex items-center gap-[10px]">
        <SearchIcon className="w-[24px] h-fit" color="stroke-[#000000]" />
        <input
          type="text"
          placeholder="Find articles on Rental"
          className="bg-transparent outline-none text-black placeholder:text-black text-[18px] max-md:text-[16px] w-full"
        />
      </div>
      <button className="bg-[#001F4E] hover:bg-black rounded-[30px] text-[18px] max-md:text-[16px] font-medium p-[16px_30px] max-md:p-[10px_20px] text-white">
        Search
      </button>
    </div>
  );
};

export default Search;
