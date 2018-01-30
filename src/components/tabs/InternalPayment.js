import React from "react";
import PropTypes from 'prop-types';

import config from "../../config";
import Select from "../common/Select";
import TextInput from "../common/TextInput";
import FormComponentBase from "../common/FormComponentBase";

export default class InternalPayment extends FormComponentBase {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      type: config.paymentTypes[0].value,
      currency: config.currencies[0].value
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert("Do you really want to create a payment: " + JSON.stringify(this.state));
    this.props.onCreatePayment(this.state);
  }

  render() {
    return (
      <section>
        <h1>Internal payment</h1>

        <form>
          <TextInput name={'recipient'} label={'Recipient'} onchange={this.handleChange}/>
          <TextInput name={'iban'} label={'IBAN'} onchange={this.handleChange}/>

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

InternalPayment.propTypes = {
  onCreatePayment: PropTypes.func.isRequired
};