import React from "react";

import {
  LoginContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>login</Button>
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
