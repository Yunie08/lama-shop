import React from "react";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import Newsletter from "../../components/shared/newsletter/newsletter.component";
import Footer from "../../components/shared/footer/footer.component";
//import Filter from "../../components/shared/filter/filter.component";
import {
  ProductContainer,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./product.styles";
import { Add, Remove } from "@mui/icons-material";

// const productFilters = {
//   colors: {
//     title: "color",
//     select: [{ options: ["black", "dark blue", "gray"] }],
//   },
//   sizes: {
//     title: "size",
//     select: [{ options: ["XS", "S", "M", "L", "XL"] }],
//   },
// };

const Product = () => {
  return (
    <ProductContainer>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
            facilis sit asperiores, possimus obcaecati tempora cum accusantium
            commodi doloremque eveniet, voluptate sint laudantium quaerat iste
            animi quas quod dicta?
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            {/* <Filter
              key={productFilters.colors.title}
              filter={productFilters.colors}
            />
            <Filter
              key={productFilters.sizes.title}
              filter={productFilters.sizes}
            /> */}

            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </ProductContainer>
  );
};

export default Product;
