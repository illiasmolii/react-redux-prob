import React from "react";
import PropTypes from 'prop-types';

export default class PaymentDetails extends React.Component {

  render() {
    const payment = this.props.payment;

    return (
      <section>
        <h1>Payment Details</h1>

        <div className={'col-md-8 col-md-offset-2'}>
          <table className={'table'}>
            <tbody>
            <tr>
              <th>Recipient</th>
              <td>{payment.recipient}</td>
            </tr>
            <tr>
              <th>Type of payment</th>
              <td>{payment.type}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{payment.currency}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{payment.amount}</td>
            </tr>
            {payment.iban &&
              <tr>
                <th>IBAN</th>
                <td>{payment.iban}</td>
              </tr>
            }
            {payment.country &&
              <tr>
                <th>Country</th>
                <td>{payment.country}</td>
              </tr>
            }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}