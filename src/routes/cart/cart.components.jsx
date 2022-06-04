import React from "react";
import { useSelector } from "react-redux";

import Announcement from "../../components/shared/announcement/announcement.component";
import Navbar from "../../components/shared/navbar/navbar.component";
import Footer from "../../components/shared/footer/footer.component";

import {
  CartContainer,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  Summary,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./cart.styles";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <CartContainer>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>your cart</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping cart (2)</TopText>
            <TopText>Your whishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.image} alt={product.title} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                    <ProductColor color={product.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout now</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </CartContainer>
  );
};

export default Cart;
