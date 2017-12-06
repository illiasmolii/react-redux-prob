import React from "react";

import Payment from "./Payment";

export default class MyPayments extends React.Component {

  render() {
    return (
      <section>
        <table>
          <tbody>
          <tr>
            <th>#</th>
            <th>Recipient</th>
            <th>Date</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Details</th>
          </tr>
          {
            this.props.payments.map(p =>
              <Payment key={p.id} payment={p}/>
            )
          }
          </tbody>
        </table>
      </section>
    );
  }
}