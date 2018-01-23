import React from "react";
import PropTypes from 'prop-types';

import config from "../../config";
import TextInput from "../common/TextInput";
import Select from "../common/Select";
import FormComponentBase from "../common/FormComponentBase";
import ExternalPaymentCalculator from "../../util/ExternalPaymentCalculator";
import { createPayment, paymentTypes } from "../../state/actions/payments";
import { changeBalance } from "../../state/actions/balance";

export default class ExternalPayment extends FormComponentBase {

  countries = Object.keys(ExternalPaymentCalculator.zones)
    .map(country => {
      return {
        name: country,
        value: country
      }
    });

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      country: this.countries[0].value,
      type: config.paymentTypes[0].value,
      currency: config.currencies[0].value
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert("Do you really want to create a payment: " + JSON.stringify(this.state));
    const amountWithFee = ExternalPaymentCalculator.adjustAmount(this.state.country, this.state.amount);

    this.state = Object.assign({}, this.state, {
      fee: amountWithFee - this.state.amount
    });

    this.props.store.dispatch(createPayment(this.state, paymentTypes.EXTERNAL));
    this.props.store.dispatch(changeBalance(- amountWithFee, this.state.currency));
  }

  render() {
    return (
      <section>
        <h1>External payment</h1>

        <form>
          <TextInput name={'recipient'} label={'Recipient'} onchange={this.handleChange}/>

          <Select label={'Country'}
                  name={'country'}
                  onchange={this.handleChange}
                  options={this.countries}/>

          <Select label={'Type of the payment'}
                  name={'type'}
                  onchange={this.handleChange}
                  options={config.paymentTypes}/>

          <Select label={'Currency'}
                  name={'currency'}
                  onchange={this.handleChange}
                  options={config.currencies}/>

          <TextInput name={'amount'} label={'Amount'} onchange={this.handleChange}/>

          <input type={'button'}
                 onClick={this.handleSubmit}
                 value={'Create payment'} className={'btn btn-primary'}/>
        </form>
      </section>
    );
  }
}

ExternalPayment.propTypes = {
  store: PropTypes.object.isRequired
};