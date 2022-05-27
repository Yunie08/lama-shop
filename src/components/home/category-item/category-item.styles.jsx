import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 50%;
  padding: 30px 40px;
  opacity: 0.9;
  border: 2px solid white;
`;
export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 35px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  text-transform: uppercase;
  border: none;
  padding: 10px 20px;
  background-color: white;
  font-weight: 500;
  color: grey;
  cursor: pointer;
`;
