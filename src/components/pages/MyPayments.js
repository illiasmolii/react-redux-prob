import React from "react";
import PropTypes from 'prop-types';

import Payment from "./Payment";

export default class MyPayments extends React.Component {

  render() {
    const payments = this.props.payments;

    if (!!payments && payments.length > 0) {
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
                <th>Fee</th>
                <th>Details</th>
              </tr>
              {
                payments.map((p, index) =>
                  <Payment key={index}
                           i={index + 1}
                           payment={p}
                           showPaymentDetails={this.props.showPaymentDetails}/>
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

MyPayments.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.object.isRequired),
  showPaymentDetails: PropTypes.func.isRequired
};