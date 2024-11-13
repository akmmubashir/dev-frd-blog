import React from "react";

const ContentTile = ({ data }) => {
  const paragraphs = data?.content.split("\n\n");
  return (
    <div id={"#" + data?.title}>
      <h2 className="text-[26px] max-md:text-[18px] font-medium mb-[10px] text-black">
        {data?.title}
      </h2>
      <div className="flex flex-col gap-[10px]">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-[#2A2A2A]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContentTile;
