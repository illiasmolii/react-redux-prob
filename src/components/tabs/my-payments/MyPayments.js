import React from "react";

import Payment from "./Payment";

export default class MyPayments extends React.Component {

  render() {
    const payments = this.props.store.getState().payments;
    const mergedPayments = payments.internal
      ? payments.internal.concat(payments.external ? payments.external : [])
      : payments.external;

    if (mergedPayments) {
      return (
        <section className={'row'}>
          <div className={'col-md-8 col-md-offset-2'}>
            <table className={'table'}>
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
                mergedPayments.map((p, index) =>
                  <Payment key={index} i={index + 1} payment={p} store={this.props.store}/>
                )
              }
              </tbody>
            </table>
          </div>
        </section>
      );
    } else {
      return <span>You don't have any payments yet</span>
    }
  }
}