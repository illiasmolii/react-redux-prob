import React from "react";

import config from "../../config";
import Select from "../common/Select";
import TextInput from "../common/TextInput";
import { createPayment, paymentTypes } from "../../state/actions/payments";

export default class Internal extends React.Component {

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

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    alert("Do you really want to create a payment: " + JSON.stringify(this.state));
    this.props.store.dispatch(createPayment(this.state, paymentTypes.INTERNAL));
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