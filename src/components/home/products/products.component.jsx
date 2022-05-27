import React from "react";

import { popularProducts } from "../../../data";

import ProductItem from "../../product-item/product-item.component";

import { ProductsContainer } from "./products.styles";

const Products = () => {
  return (
    <ProductsContainer>
      {popularProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
