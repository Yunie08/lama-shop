import styled from "styled-components";

import { device } from "../../utils/responsive";

export const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      right;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  max-width: 400px;
  padding: 25px 20px;
  background-color: #fff;

  @media ${device.mobile} {
    width: 80%;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media ${device.mobile} {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 20px;

  @media ${device.mobile} {
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
  grid-column: 1 / span 2;
  justify-self: center;
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
  text-transform: uppercase;

  &:disabled {
    background-color: #549797;
  }
`;

export const Error = styled.span`
  color: red;
  margin-top: -10px;
  font-size: 13px;
`;

export const Link = styled.a`
  margin: -5px 0;
  font-size: 12px;
  text-decoration: underline;
`;
