import React from "react";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import ProductsPreview from "../../components/home/products-preview/products-preview.component";
import Newsletter from "../../components/shared/newsletter/newsletter.component";
import Footer from "../../components/shared/footer/footer.component";

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./category.styles";

const Category = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsPreview />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Category;
