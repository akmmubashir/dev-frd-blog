import React from "react";
import Link from "next/link";
import { Logo } from "./svgIcon";

const Navbar = () => {
  const navigationData = [
    { id: 1, title: "Travel Tips and Guides", path: "/" },
    { id: 2, title: "Budget Travel", path: "/" },
    { id: 3, title: "Offers and Promotions", path: "/" },
    { id: 4, title: "Eco-Friendly Travel", path: "/" },
  ];
  return (
    <div className="bg-white p-[30px_60px] max-sm:p-[20px] flex items-center border-b border-[#c9c9c9] drop-shadow-xl relative z-10">
      <div>
        <Link prefetch href={"https://dev-frd.vercel.app"} className="logo">
          <Logo
            className={"w-[220px] max-md:w-[180px] h-fit"}
            color={"fill-[#000]"}
          />
        </Link>
      </div>
      <div className="ms-auto flex items-center gap-[15px] max-md:hidden">
        {navigationData?.map((item) => (
          <Link
            key={item?.id}
            href={`/${item?.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\s]/gi, "-")
              .replace(/-+/g, "-")}`}
            className="text-[18px] max-2xl:text-[16px] text-black hover:text-[#dda965] font-normal"
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
