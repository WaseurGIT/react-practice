import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <Banner/>
      <div className="py-12 px-4">
        <Products/>
      </div>
    </div>
  );
};

export default Home;