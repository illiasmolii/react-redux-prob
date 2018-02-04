import { connect } from 'react-redux'

import { createPayment, paymentTypes } from "../state/actions/payments";
import { changeBalance } from "../state/actions/balance";
import { showMyPayments } from "../state/actions/navigation";
import ExternalPayment from "../components/pages/ExternalPayment";

const mapDispatchToProps = dispatch => {
  return {
    onCreatePayment: (paymentDetails, amountWithFee) => {
      dispatch(createPayment(paymentDetails, paymentTypes.EXTERNAL));
      dispatch(changeBalance(- amountWithFee, paymentDetails.currency));
      dispatch(showMyPayments());
    }
  }
};

const ExternalPaymentComponent = connect(
  undefined,
  mapDispatchToProps
)(ExternalPayment);

export default ExternalPaymentComponent;