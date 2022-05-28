import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";

import {
  FooterContainer,
  Left,
  Center,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>LAMA.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          molestias odit excepturi quisquam enim tempora voluptate dolor ea
          praesentium fuga magnam numquam, autem placeat dolorem. Repudiandae
          corrupti aliquid eaque, eligendi, soluta dolor vitae tenetur totam
          commodi fuga nisi.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#">Cart</a>
          </ListItem>
          <ListItem>
            <a href="#">Woman Fashion</a>
          </ListItem>
          <ListItem>
            <a href="#">Man Fashion</a>
          </ListItem>
          <ListItem>
            <a href="#">Accessories</a>
          </ListItem>
          <ListItem>
            <a href="#">My Account</a>
          </ListItem>
          <ListItem>
            <a href="#">Order Tracking</a>
          </ListItem>
          <ListItem>
            <a href="#">Wishlist</a>
          </ListItem>
          <ListItem>
            <a href="#">Terms</a>
          </ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone /> +1 234 567 89
        </ContactItem>
        <ContactItem>
          <MailOutline /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </FooterContainer>
  );
};

export default Footer;
