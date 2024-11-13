import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import OurCategories from "./components/ourCategories";
import Search from "./components/search";
import TopPosts from "./components/topPosts";
import ListedSection from "../components/listedSection";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="p-[60px_100px] max-lg:p-[60px_80px] max-md:p-[30px_20px] flex flex-col gap-[30px] max-md:gap-[20px_0]">
          <Search />
          <OurCategories />
        </div>
        <TopPosts />
        <ListedSection category={false} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
