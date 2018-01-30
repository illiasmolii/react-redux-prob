import { connect } from 'react-redux'

import { createPayment, paymentTypes } from "../state/actions/payments";
import { changeBalance } from "../state/actions/balance";
import InternalPayment from "../components/pages/InternalPayment";

const mapDispatchToProps = dispatch => {
  return {
    onCreatePayment: (paymentDetails) => {
      dispatch(createPayment(paymentDetails, paymentTypes.INTERNAL));
      dispatch(changeBalance(- paymentDetails.amount, paymentDetails.currency))
    }
  }
};

const InternalPaymentComponent = connect(
  undefined,
  mapDispatchToProps
)(InternalPayment);

export default InternalPaymentComponent;