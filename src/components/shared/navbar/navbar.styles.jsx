import styled from "styled-components";
import { device } from "../../../utils/responsive";

export const Container = styled.div`
  height: 60px;

  @media ${device.mobile} {
    height: 50px;
  }
`;

export const Wrapper = styled.header`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media ${device.mobile} {
    padding: 10px 0px;
    grid-template-columns: 1fr 1fr 2fr;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media ${device.mobile} {
    display: none;
  }
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

  @media ${device.mobile} {
    width: 50px;
  }
`;

export const Center = styled.div``;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  @media ${device.mobile} {
    font-size: 24px;
    text-align: right;
    margin-right: -10px;
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 25px;

  @media ${device.mobile} {
    font-size: 12px;
    margin-left: 10px;
  }
`;
