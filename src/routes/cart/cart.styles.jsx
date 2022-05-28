import styled from "styled-components";

export const CartContainer = styled.main``;

export const Wrapper = styled.section`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  width: 170px;
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#000" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 7%;
`;

export const Info = styled.div``;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const ProductDetail = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;

export const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  max-height: 70vh;
`;
export const SummaryTitle = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  margin-top: auto;
  text-transform: uppercase;
`;
