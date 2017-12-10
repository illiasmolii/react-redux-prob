import React from "react";

import Select from "../common/Select";
import { createPayment, paymentTypes } from "../../state/actions/payments";

export default class Internal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { date: new Date() };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.state = Object.assign({}, this.state, {
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    alert(JSON.stringify(this.state));
    this.props.store.dispatch(createPayment(this.state, paymentTypes.INTERNAL));
  }

  render() {
    return (
      <section>
        <h1>Internal payment</h1>

        <form>
          <div className={'form-group'}>
            <label className={'control-label'}>
              Recipient
              <input type={'text'}
                     name={'recipient'}
                     className={'form-control'}
                     onChange={this.handleChange}/>
            </label>
          </div>

          <div className={'form-group'}>
            <label className={'control-label'}>
              IBAN
              <input type={'text'}
                     name={'iban'}
                     className={'form-control'}
                     onChange={this.handleChange}/>
            </label>
          </div>

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

          <div className={'form-group'}>
            <label className={'control-label'}>
              Amount
              <input type={'text'}
                     name={'amount'}
                     className={'form-control'}
                     onChange={this.handleChange}/>
            </label>
          </div>

          <input type={'button'}
                 onClick={this.handleSubmit}
                 value={'Create payment'} className={'btn btn-primary'}/>
        </form>
      </section>
    );
  }
}