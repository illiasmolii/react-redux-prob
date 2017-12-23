import React from "react";

export default class Balance extends React.Component {

  render() {
    return (
      <section>
        <h1>Balance</h1>

        <p>Your current balance is: <strong>{this.props.balance} USD</strong></p>
      </section>
    );
  }
}