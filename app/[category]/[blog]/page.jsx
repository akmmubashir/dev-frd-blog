import React from "react";
import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import BreadCrumbs from "@/app/components/breadCrumbs";
import Footer from "@/app/components/footer";
import SideBar from "@/app/components/sideBar";
import { findPostByTitle } from "@/app/utils/services/service";
import Image from "next/image";
import BlogDetails from "./components/blogDetails";

const page = ({ params }) => {
  const filteredPost = findPostByTitle(
    params?.blog
      ?.replace(/\s+/g, " ")
      .replace(/[^\w\s]/gi, " ")
      .replace(/-+/g, " "),
  );
  // console.log(filteredPost);
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <BreadCrumbs linkData={params?.category} page={filteredPost?.title} />
        <div className="grid grid-cols-12 gap-[50px] max-sm:gap-[30px_0] p-[40px_100px_0] max-lg:p-[30px_80px_0] max-md:p-[30px_20px_0] ">
          <div className="col-span-8 max-md:col-span-full">
            <BlogDetails currentPost={filteredPost} />
          </div>
          <div className="col-span-4 max-md:col-span-full">
            <SideBar category={true} blog={true} currentPost={filteredPost} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
