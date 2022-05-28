import styled from "styled-components";

import { device } from "../../../utils/responsive";

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.4%;
  row-gap: 1%;
  padding: 20px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
`;
