import styled from "styled-components";

export const NewsletterContainer = styled.section`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-style: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 50%;
  max-width: 800px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  max-width: 100px;
  border: none;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
