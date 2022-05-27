import React from "react";

import { categories } from "../../../data";

import CategoryItem from "../category-item/category-item.component";

import { CategoriesContainer } from "./categories.styles";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={`category-${category.id}`} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
