import React from "react";

import Select from "../common/Select";

export default class Internal extends React.Component {

  render() {
    return (
      // TODO add Bootstrap
      <section>
        <h1>Internal payment</h1>
        <form>
          <label>
            Name
            <input type={'text'}/>
          </label>
          <br/>
          <label>
            IBAN
            <input type={'text'}/>
          </label>
          <br/>
          <Select label={'Type of the payment'}
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
          <label>
            Amount
            <input type={'text'}/>
          </label>
          <br/>
          <input type={'submit'} value={'Create payment'}/>
        </form>
      </section>
    );
  }
}