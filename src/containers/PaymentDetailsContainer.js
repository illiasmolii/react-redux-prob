import { connect } from 'react-redux'

import PaymentDetails from "../components/pages/PaymentDetails";

const mapStateToProps = state => {
  return {
    payment: state.navigation.payload
  }
};

const PaymentDetailsComponent = connect(
  mapStateToProps
)(PaymentDetails);

export default PaymentDetailsComponent;
