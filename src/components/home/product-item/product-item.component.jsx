import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onSearchHandler = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <ProductContainer>
      <Circle />
      <Image src={product.image} alt="" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={onSearchHandler}>
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
