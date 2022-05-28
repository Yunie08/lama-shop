import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  transition: all 250ms;
  &:hover {
    opacity: 1;
  }
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;
