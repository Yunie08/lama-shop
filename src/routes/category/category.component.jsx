import { useState } from "react";
import { useParams } from "react-router-dom";

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
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsPreview category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Category;
