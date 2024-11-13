import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BreadCrumbs from "../components/breadCrumbs";
import ListedSection from "../components/listedSection";
import { findCategoryByTitle } from "../utils/services/service";

const page = ({ params }) => {
  const currentCategory = findCategoryByTitle(params?.category);
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <BreadCrumbs page={currentCategory?.title} />
        <ListedSection category={true} categoryTitle={params?.category} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
