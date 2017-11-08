import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/inlineerror';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  };

  onChange = e => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(this.state.data.email)) errors.email = "Invalid email";
    if (!this.state.data.password) errors.password = "Can't be blank";
    return errors
  }

  render() {
    return (
      <Form onSubmit = {this.onSubmit}>
        <Form.Field error={!!this.state.errors.email}>
          <label htmlFor = 'email'> Email </label>
          <input type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value = {this.state.data.email}
            onChange= {this.onChange}/>
        { this.state.errors.email && <InlineError text = {this.state.errors.email}/>}

        </Form.Field>

        <Form.Field error={!!this.state.errors.password}>
          <label htmlFor = 'password'> Password </label>
          <input type="password"
            id="password"
            name="password"
            placeholder="password"
            value = {this.state.data.password}
            onChange= {this.onChange}/>

      { this.state.errors.password && <InlineError  text= {this.state.errors.password}/>}

        </Form.Field>

        <Button primary> Login </Button>
      </Form>

    );
  }
}

LoginForm.proptypes = {
  submit: PropTypes.func.isRequired
};
