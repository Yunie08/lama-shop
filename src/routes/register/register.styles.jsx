import styled from "styled-components";

export const RegisterContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
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
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-style: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
`;

export const Agreement = styled.span`
  grid-column: 1 / span 2;
  font-size: 12px;

  b {
    text-transform: uppercase;
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
