import React from "react";

import { showPaymentDetails } from "../../../state/actions/navigation";

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
        <td>
          <button className={'btn btn-default'}
                  onClick={() => this.props.store.dispatch(showPaymentDetails(payment))}>
            Details
          </button>
        </td>
      </tr>
    );
  }
}