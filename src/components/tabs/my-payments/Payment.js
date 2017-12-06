import React from "react";

export default class Payment extends React.Component {

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <tr>
        <td>{this.props.payment.id}</td>
        <td>{this.props.payment.recipient}</td>
        <td>{this.props.payment.date.toLocaleDateString()}</td>
        <td>{this.props.payment.currency}</td>
        <td>{this.props.payment.amount}</td>
        <td><a>Details</a></td>
      </tr>
    );
  }
}