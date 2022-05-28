import styled from "styled-components";

export const ProductContainer = styled.main``;

export const Wrapper = styled.section`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImgContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  max-height: 750px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 0px 50px;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 35px;
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 4px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  padding: 5px;
  text-transform: uppercase;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  justify-self: flex-start;
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #e1f7f7;
  }
`;
