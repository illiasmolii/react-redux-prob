import React from "react";
import PropTypes from 'prop-types';

export default class Payment extends React.Component {

  render() {
    const payment = this.props.payment;

    return (
      <tr>
        <td>{this.props.i}</td>
        <td>{payment.recipient}</td>
        <td>{payment.date.toLocaleDateString()}</td>
        <td>{payment.currency}</td>
        <td>{payment.amount}</td>
        <td>{payment.fee ? payment.fee : '0'}</td>
        <td>
          <button className={'btn btn-default'}
                  onClick={() => this.props.showPaymentDetails(payment)}>
            Details
          </button>
        </td>
      </tr>
    );
  }
}

Payment.propTypes = {
  payment: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  showPaymentDetails: PropTypes.func.isRequired
};