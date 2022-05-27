import React from "react";

import { Container, Image, Info, Title, Button } from "./category-item.styles";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.image} alt={category.title} />
      <Info>
        <Title>{category.title}</Title>
        <Button>shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
