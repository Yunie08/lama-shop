import React from "react";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import Slider from "../../components/home/slider/slider.component";
import Categories from "../../components/home/categories/categories.component";
import ProductsPreview from "../../components/home/products-preview/products-preview.component";
import Newsletter from "../../components/shared/newsletter/newsletter.component";
import Footer from "../../components/shared/footer/footer.component";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductsPreview />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
