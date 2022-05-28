import styled from "styled-components";

import { device } from "../../../utils/responsive";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  @media ${device.mobile} {
    order: 3;
  }
`;

export const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Description = styled.p`
  margin: 20px 0;
`;
export const SocialContainer = styled.div`
  display: flex;
  column-gap: 15px;
`;
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  padding: 3px 0;
  margin: 3px 0;
`;

export const Right = styled.div`
  padding: 20px;

  @media ${device.mobile} {
    background: #fff8f8;
  }
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;
export const Payment = styled.img`
  width: 60%;
`;
