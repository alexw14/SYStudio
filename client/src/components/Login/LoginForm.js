import React from 'react';
import {
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  Button,
} from '@chakra-ui/react';

const LoginForm = (props) => {
  const { email, password, handleChange, handleSubmit } = props;
  const generateLoginForm = () => {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Email</label>
          <Input name="email" value={email} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Password</label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Button type="submit" size="md" colorScheme="teal">
            Log In
          </Button>
        </div>
      </form>
    );
  };
  return <div>{generateLoginForm()}</div>;
};

export default LoginForm;
