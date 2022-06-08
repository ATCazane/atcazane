import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import AdvantagesSection from "../components/AdvantagesSection";
import GallerySection from "../components/GallerySection";
import ProductDetailsSection from "../components/ProductDetailsSection";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [productId, setProductId] = useState(0);
  const [lang, setLang] = useState("ro");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const handleLanguageChange = (event) => {
    setLang(event.value);
  };

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleLanguageChange={handleLanguageChange}
        lang={lang}
      />
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        handleLanguageChange={handleLanguageChange}
        lang={lang}
      />
      <HomeSection lang={lang} />
      <InfoSection {...homeObjOne} lang={lang} />
      <AdvantagesSection lang={lang} />
      <ProductsSection
        toggleDetails={toggleDetails}
        setProductId={setProductId}
        lang={lang}
      />
      <ProductDetailsSection
        isDetailsOpen={isDetailsOpen}
        toggleDetails={toggleDetails}
        productId={productId}
        lang={lang}
      />
      <GallerySection lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default Home;
