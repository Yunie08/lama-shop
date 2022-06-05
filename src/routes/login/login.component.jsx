import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/apiCalls";

import {
  LoginContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./login.styles";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <LoginContainer>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <>
            <Button onClick={handleLogin} disabled={isFetching}>
              login
            </Button>
            {error && <Error>Something went wrong</Error>}
          </>
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
