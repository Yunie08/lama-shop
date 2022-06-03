import styled from "styled-components";

import { device } from "../../utils/responsive";

// TODO: di => main
export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-left: 20px;

  @media ${device.mobile} {
    margin-left: 0px;
  }
`;

export const FilterText = styled.span`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
export const Option = styled.option``;
