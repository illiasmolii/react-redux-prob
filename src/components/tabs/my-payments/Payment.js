import React from "react";

export default class Payment extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.i}</td>
        <td>{this.props.payment.recipient}</td>
        <td>{this.props.payment.date.toLocaleDateString()}</td>
        <td>{this.props.payment.currency}</td>
        <td>{this.props.payment.amount}</td>
        <td><a>Details</a></td>
      </tr>
    );
  }
}