import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

import {
  ProductContainer,
  Circle,
  Image,
  Info,
  Icon,
} from "./product-item.styles";

const ProductItem = ({ product }) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={product.image} alt="" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default ProductItem;
