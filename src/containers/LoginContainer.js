import { connect } from 'react-redux'
import Login from '../components/tabs/Login'
import { login } from "../state/actions/auth";

const mapStateToProps = state => {
  return {
    name: state.name,
    pass: state.pass
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => {
      dispatch(login(this.state.name, this.state.pass))
    }
  };
};

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginComponent;