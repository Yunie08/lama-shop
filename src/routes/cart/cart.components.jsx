import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import paymentService from "../../services/payment.services";

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

const KEY =
  "pk_test_51Kvv1dL5VAEeEg0uqEo7Hctp7D29NpDnKeYkkigl3RwsdevkVVqteIyqFf874rIf9nzuyKft7H1IJ1S5gbKsSnF100Hk36hIL4";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await paymentService.sendPaymentReq({
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          state: { stripeData: res.data.data.stripeRes, products: cart },
        });
      } catch (error) {}
    };
    stripeToken && makePaymentRequest();
  }, [stripeToken, cart.total, navigate]);

  console.log(stripeToken);
  return (
    <CartContainer>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>your cart</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping cart ({cart.quantity})</TopText>
            <TopText>Your whishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((product, index) => (
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
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </CartContainer>
  );
};

export default Cart;
