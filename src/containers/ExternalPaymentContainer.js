import { connect } from 'react-redux'

import { createPayment, paymentTypes } from "../state/actions/payments";
import { changeBalance } from "../state/actions/balance";
import ExternalPayment from "../components/tabs/ExternalPayment";

const mapDispatchToProps = dispatch => {
  return {
    onCreatePayment: (paymentDetails, amountWithFee) => {
      dispatch(createPayment(paymentDetails, paymentTypes.EXTERNAL));
      dispatch(changeBalance(- amountWithFee, paymentDetails.currency))
    }
  }
};

const ExternalPaymentComponent = connect(
  state => {},
  mapDispatchToProps
)(ExternalPayment);

export default ExternalPaymentComponent;