import { connect } from 'react-redux'

import Login from '../components/pages/Login'
import { login } from "../state/actions/auth";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (name, pass) => {
      dispatch(login(name, pass))
    }
  };
};

const LoginComponent = connect(
  undefined,
  mapDispatchToProps,
)(Login);

export default LoginComponent;