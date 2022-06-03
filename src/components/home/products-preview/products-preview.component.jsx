import React, { useState, useEffect } from "react";
import axios from "axios";

import { popularProducts } from "../../../data";

import ProductItem from "../product-item/product-item.component";

import { ProductsContainer } from "./products-preview.styles";

const ProductsPreview = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // if no category (ex: product from home page)
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        console.log(res);
        setProducts(res.data.data.products);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      products &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
        // Object.entries(filters) => return array of filters key-value pairs
        // [].every check if the condition in the callback function can be applied to all elements in the array
        // here we check if [color] and/or [size] in our current item includes filters values
      );
  }, [products, category, filters]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
      case "desc":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) => b.price - a.price)
        );
        break;
      case "asc":
        setFilteredProducts((prevFilteredProducts) =>
          [...prevFilteredProducts].sort((a, b) => a.price - b.price)
        );
        break;
      default:
        console.log("Unvalid sort value");
    }
  }, [sort]);

  return (
    <ProductsContainer>
      {category
        ? filteredProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
    </ProductsContainer>
  );
};

export default ProductsPreview;
