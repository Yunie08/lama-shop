import React from "react";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import ProductsPreview from "../../components/home/products-preview/products-preview.component";
import Newsletter from "../../components/shared/newsletter/newsletter.component";
import Footer from "../../components/shared/footer/footer.component";
import Filter from "../../components/shared/filter/filter.component";

import { Container, Title, FilterContainer } from "./category.styles";

const productFilters = {
  product: {
    title: "Filter products",
    select: [
      {
        options: [
          { disabled: "color" },
          "white",
          "black",
          "red",
          "yellow",
          "blue",
          "green",
        ],
      },
      { options: [{ disabled: "size" }, "XS", "S", "M", "L", "XL"] },
    ],
  },
};
const sortingFilters = {
  sort: {
    title: "Sort products",
    select: [{ options: ["Newest", "Price (asc)", "Price (desc)"] }],
  },
};

const Category = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter filter={productFilters.product} />
        <Filter filter={sortingFilters.sort} />
      </FilterContainer>
      <ProductsPreview />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Category;
