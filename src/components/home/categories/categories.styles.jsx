import styled from "styled-components";

import { device } from "../../../utils/responsive";

export const CategoriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  column-gap: 0.5%;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding: 0px;
  }
`;
