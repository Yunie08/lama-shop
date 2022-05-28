import { Send } from "@mui/icons-material";
import React from "react";

import {
  NewsletterContainer,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./newsletter.styles";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
