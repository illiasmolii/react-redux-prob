import React from "react";
import PropTypes from 'prop-types';

import config from "../../config";
import TextInput from "../common/TextInput";
import Select from "../common/Select";
import FormComponentBase from "../common/FormComponentBase";
import ExternalPaymentCalculator from "../../util/ExternalPaymentCalculator";

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
      currency: config.currencies[0].value,
      fee: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const amountWithFee = ExternalPaymentCalculator.adjustAmount(this.state.country, this.state.amount);
    this.setState({
      fee: amountWithFee - this.state.amount
    });

    alert("Do you really want to create a payment: " + JSON.stringify(this.state));

    this.props.onCreatePayment(this.state, amountWithFee);
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
  onCreatePayment: PropTypes.func.isRequired
};