import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../../utils/responsive";

export const Container = styled.div`
  height: 70vh;
  position: relative;

  @media ${device.mobile} {
    height: 30vh;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
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
  /* min-width: 50%;*/
  width: 100%;
  padding: 30px 0px;
  opacity: 0.9;
  //border: 2px solid white;
`;
export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
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
