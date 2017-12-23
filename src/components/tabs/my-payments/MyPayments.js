import React from "react";

import Payment from "./Payment";

export default class MyPayments extends React.Component {

  render() {
    if (this.props.payments) {
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
                <th>Details</th>{/* TODO */}
              </tr>
              {
                this.props.payments.map((p, index) =>
                  <Payment key={index} i={index + 1} payment={p}/>
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