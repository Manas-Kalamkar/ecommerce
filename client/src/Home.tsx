import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import { useProductContext } from "./context/ProductContext";
import FeatureProduct from "./components/FeatureProducts.tsx";


const Home: React.FC = () => {
  
  return (
    <>
      <HeroSection myData={"MK Store"} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
