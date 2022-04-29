import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from './LoginForm';

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
    const response = await this.postLogin(dataToSubmit);
  };

  postLogin = async (dataToSubmit) => {
    try {
      const response = await axios.post('/api/users/login', dataToSubmit);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LoginPage;
