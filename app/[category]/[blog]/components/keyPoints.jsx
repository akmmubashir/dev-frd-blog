import { TickIcon } from "@/app/components/svgIcon";
import React from "react";

const KeyPoints = ({ data }) => {
  return (
    <div className="p-[20px] w-2/3 max-md:w-full bg-[#FEF4E8] rounded-[20px]">
      <h2 className="text-black text-[20px] max-md:text-[18px] font-medium mb-[15px]">
        Key Points
      </h2>

      <div className="flex flex-col gap-[10px]">
        {data?.map((item, index) => (
          <div key={index} className="flex gap-[8px]">
            <div className="mt-1">
              <div className="bg-[#17DFBA] rounded-full w-[15px] aspect-square flex justify-center items-center">
                <TickIcon className={"w-[9px] h-fit"} color={"fill-white"} />
              </div>
            </div>
            <p className="text-[16px] max-md:text-[14px] text-[#2a2a2a]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyPoints;
