import { connect } from 'react-redux'

import MyPayments from "../components/pages/MyPayments";
import { showPaymentDetails } from "../state/actions/navigation";

const mapStateToProps = state => {
  return {
    payments: state.payments
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showPaymentDetails: (payment) =>
      dispatch(showPaymentDetails(payment))
  }
};

const MyPaymentsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPayments);

export default MyPaymentsComponent;