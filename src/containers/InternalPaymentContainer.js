import { connect } from 'react-redux'

import { createPayment, paymentTypes } from "../state/actions/payments";
import { changeBalance } from "../state/actions/balance";
import { showMyPayments } from "../state/actions/navigation";
import InternalPayment from "../components/pages/InternalPayment";

const mapDispatchToProps = dispatch => {
  return {
    onCreatePayment: (paymentDetails) => {
      dispatch(createPayment(paymentDetails, paymentTypes.INTERNAL));
      dispatch(changeBalance(- paymentDetails.amount, paymentDetails.currency));
      dispatch(showMyPayments());
    }
  }
};

const InternalPaymentComponent = connect(
  undefined,
  mapDispatchToProps
)(InternalPayment);

export default InternalPaymentComponent;