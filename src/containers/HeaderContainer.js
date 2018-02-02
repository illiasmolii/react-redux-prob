import { connect } from 'react-redux';

import {
  showBalance, showExternal, showInternal, showMyPayments
} from "../state/actions/navigation";
import { logout } from "../state/actions/auth";
import Header from "../components/Header";

const mapDispatchToProps = dispatch => {
  return {
    balance: () => dispatch(showBalance()),
    myPayments: () => dispatch(showMyPayments()),
    internal: () => dispatch(showInternal()),
    external: () => dispatch(showExternal()),
    logout: () => dispatch(logout())
  };
};

const HeaderComponent = connect(
  undefined,
  mapDispatchToProps
)(Header);

export default HeaderComponent;