import React from "react";

import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import SubmitButton from "../common/SubmitButton";
import { login } from "../../state/actions/auth";

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

// TODO move to base component class
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login() {
    this.props.store.dispatch(login(this.state.name, this.state.pass));
  }

  render() {
    return (
      <section>
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