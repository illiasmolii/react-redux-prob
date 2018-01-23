import React from "react";
import PropTypes from 'prop-types';

import FormComponentBase from "../common/FormComponentBase";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import SubmitButton from "../common/SubmitButton";
import { login } from "../../state/actions/auth";

export default class Login extends FormComponentBase {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.props.store.dispatch(login(this.state.name, this.state.pass));
  }

  render() {
    return (
      <section className={'container-fluid text-center'}>
        <h1>Login</h1>

        <form>
          <TextInput name={'name'} label={'Name'} onchange={this.handleChange}/>
          <PasswordInput onchange={this.handleChange}/>
          <SubmitButton text={'Login'} onclick={this.login}/>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  store: PropTypes.object.isRequired
};