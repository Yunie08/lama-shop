import { Link } from "react-router-dom";

import { Container, Image, Info, Title, Button } from "./category-item.styles";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.name}`}>
        <Image src={category.image} alt={category.title} />
        <Info>
          <Title>{category.title}</Title>
          <Button>shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
