import styled from "styled-components";

import { device } from "../../../utils/responsive";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-left: 20px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
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
  text-transform: capitalize;
  @media ${device.mobile} {
    width: 100%;
  }
`;
export const Option = styled.option`
  text-transform: capitalize;
`;
