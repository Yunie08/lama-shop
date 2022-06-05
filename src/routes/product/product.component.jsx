import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct } from "../../store/cartRedux";

import productService from "../../services/products.services";

import Navbar from "../../components/shared/navbar/navbar.component";
import Announcement from "../../components/shared/announcement/announcement.component";
import Newsletter from "../../components/shared/newsletter/newsletter.component";
import Footer from "../../components/shared/footer/footer.component";

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

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  //TODO: implement redux to handle cart
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const res = await productService.getProduct(productId);
        setProduct(res.data.data);
      } catch (error) {}
    };
    getOneProduct();
  }, [productId]);

  return (
    <ProductContainer>
      <Navbar />
      <Announcement />
      {product && (
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.desc}</Description>
            <Price>{`$ ${product.price}`}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color.map((color) => (
                  <FilterColor
                    color={color}
                    key={color}
                    onClick={() => setColor(color)}
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size.map((size) => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={decrementQuantity} />
                <Amount>{quantity}</Amount>
                <Add onClick={incrementQuantity} />
              </AmountContainer>
              <Button onClick={handleClick}>Add to cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      <Newsletter />
      <Footer />
    </ProductContainer>
  );
};

export default Product;
