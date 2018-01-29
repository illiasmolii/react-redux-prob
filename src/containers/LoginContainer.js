import { connect } from 'react-redux'
import Login from '../components/tabs/Login'
import { login } from "../state/actions/auth";

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(login(this.state.name, this.state.pass))
    }
  };
};

const LoginComponent = connect(
  state => {},
  mapDispatchToProps,
)(Login);

export default LoginComponent;