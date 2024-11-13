import React from "react";
import Link from "next/link";
import Image from "next/image";
import PricingBtn from "./pricingBtn";
import SeatsIcon from "@/app/assets/icons/seatsIcon.svg";
import TickIcon from "@/app/assets/icons/tickIcon.svg";

const ProductTile = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-[12px] drop-shadow-md">
      <div className="w-full">
        <Image src={data?.img} alt={data?.name} className="w-full" />
      </div>

      <div className="bg-white p-[15px]">
        <Link
          prefetch
          href={`/dubai/${data?.vehicleType[0]
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}/${data?.brand
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}/${data?.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\s]/gi, "-")
            .replace(/-+/g, "-")}`}
          className="text-[18px] font-medium text-[#242424] hover:text-[#001F4E]"
        >
          {data?.name}
        </Link>
        <div className="my-[10px]">
          <div className="flex mb-[6px]">
            <p className="text-[14px] text-[#001F4E] stroke-inherit me-auto line-through">
              {data?.pricing?.day?.oldPrice}
            </p>
            <p className="text-[14px] text-[#001F4E]">
              {data?.pricing?.day?.mileage}
            </p>
          </div>
          <div className="flex">
            <p className="text-[14px] text-black stroke-inherit me-auto font-medium">
              AED {data?.pricing?.day?.price} / day
            </p>
            <div className="flex gap-1">
              <p className="text-[14px] text-[#001F4E]">{data?.seats}</p>
              <div>
                <Image
                  src={SeatsIcon}
                  alt="SeatsIcon"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <PricingBtn pricing={data?.pricing} />
        <div className="flex items-center">
          <div>
            {data?.notes.map((item) => (
              <div key={item?.id} className="flex items-center mb-[4px]">
                <div className="w-[16px] h-[16px] flex justify-center items-center bg-[#17DFBA] p-[2px] rounded-full">
                  <Image src={TickIcon} alt="TickIcon" className="w-full" />
                </div>
                <p className="ms-1 text-[12px] text-black">{item?.content}</p>
              </div>
            ))}
          </div>
          <div className="ms-auto">
            <Image
              src={data?.supplier?.logo}
              alt={`${data?.name} logo`}
              className="w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
