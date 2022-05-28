import React from "react";

import {
  RegisterContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./register.styles";

const Register = () => {
  return (
    <RegisterContainer>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>privacy policy</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </RegisterContainer>
  );
};

export default Register;
