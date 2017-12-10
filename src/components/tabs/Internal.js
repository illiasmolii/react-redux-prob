import React from "react";

import Select from "../common/Select";
import { createPayment, paymentTypes } from "../../state/actions/payments";

export default class Internal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.state = Object.assign({}, this.state, {
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    this.state.date = new Date();
    alert(JSON.stringify(this.state));
    this.props.store.dispatch(createPayment(this.state, paymentTypes.INTERNAL));
  }

  render() {
    return (
      // TODO add Bootstrap
      <section>
        <h1>Internal payment</h1>
        <form>
          <label>
            Recipient
            <input type={'text'} name={'recipient'} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            IBAN
            <input type={'text'} name={'iban'} onChange={this.handleChange}/>
          </label>
          <br/>
          <Select label={'Type of the payment'}
                  name={'type'}
                  onchange={this.handleChange}
                  options={
                    [
                      {
                        name: 'Regular',
                        value: 'regular'
                      },
                      {
                        name: 'Charity',
                        value: 'charity'
                      }
                    ]
                  }/>
          <br/>
          <Select label={'Currency'}
                  name={'currency'}
                  onchange={this.handleChange}
                  options={
                    [
                      {
                        name: 'USD',
                        value: 'usd'
                      },
                      {
                        name: 'EUR',
                        value: 'eur'
                      }
                    ]
                  }/>
          <label>
            Amount
            <input type={'text'} name={'amount'} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type={'button'} onClick={this.handleSubmit} value={'Create payment'}/>
        </form>
      </section>
    );
  }
}