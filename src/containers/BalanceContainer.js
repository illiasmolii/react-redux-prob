import { connect } from 'react-redux'

import Balance from "../components/pages/Balance";

const mapStateToProps = state => {
  return {
    balance: state.balance.value
  }
};

const BalanceComponent = connect(
  mapStateToProps
)(Balance);

export default BalanceComponent;
