import React, { Component } from 'react';

import { loginUser } from '../../api/userAPI';
import LoginForm from './LoginForm';
import { setToken } from '../../utils/tokenService';

import "./Login.css";

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const dataToSubmit = {
      email,
      password,
    };
    const response = await loginUser(dataToSubmit);
    const { user } = response.data;
    setToken(user.token);
    this.props.handleLogin();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login-page-wrapper">
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LoginPage;
