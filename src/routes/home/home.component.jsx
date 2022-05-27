import React from "react";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import Slider from "../../components/home/slider/slider.component";
import Categories from "../../components/home/categories/categories.component";
import Products from "../../components/home/products/products.component";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
