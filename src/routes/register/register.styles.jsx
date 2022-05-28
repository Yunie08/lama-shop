import styled from "styled-components";

import { device } from "../../utils/responsive";

export const RegisterContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      right;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  max-width: 650px;
  padding: 30px 20px;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 20px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  text-transform: capitalize;
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Agreement = styled.span`
  grid-column: 1 / span 2;
  font-size: 12px;

  b {
    text-transform: uppercase;
  }
  @media ${device.mobile} {
    text-align: center;
  }
`;

export const Button = styled.button`
  grid-column: 1 / span 2;
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
  text-transform: uppercase;
`;
