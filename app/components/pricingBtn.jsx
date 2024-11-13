"use client";
import { useState } from "react";

const PricingBtn = ({ pricing }) => {
  const [selectedPlan, setSelectedPlan] = useState("weekly");

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <div className="bg-[#28405F] h-[40px] w-full rounded-full p-[5px] flex items-center">
        <button
          className={`${
            selectedPlan === "weekly"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } w-1/2 h-full rounded-full font-medium`}
          onClick={() => handleButtonClick("weekly")}
        >
          Weekly
        </button>
        <button
          className={`${
            selectedPlan === "monthly"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } w-1/2 h-full rounded-full`}
          onClick={() => handleButtonClick("monthly")}
        >
          Monthly
        </button>
      </div>
      <div className="mt-[10px]">
        <div className="flex mb-[6px]">
          <p className="text-[14px] text-[#001F4E] stroke-inherit me-auto line-through">
            {selectedPlan === "monthly"
              ? pricing?.month?.oldPrice
              : pricing?.week?.oldPrice}
          </p>
          <p className="text-[14px] text-[#001F4E]">
            {selectedPlan === "monthly"
              ? pricing?.month?.mileage
              : pricing?.week?.mileage}{" "}
            km
            {/* {selectedPlan === "monthly"
              ? `${pricing?.month?.mileage} KM`
              : `${pricing?.week?.mileage} KM`} */}
          </p>
        </div>
        <div>
          <p className="text-[14px] text-black stroke-inherit me-auto font-medium">
            {selectedPlan === "monthly"
              ? `AED ${pricing?.month?.price} / Monthly`
              : `AED ${pricing?.week?.price} / Weekly`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingBtn;
