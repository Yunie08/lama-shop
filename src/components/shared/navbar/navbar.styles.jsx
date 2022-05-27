import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.header`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Center = styled.div``;

export const Logo = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 25px;
`;
